import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home, Clock, Send } from "lucide-react";

export const metadata = {
  title: "Домашние группы — Церковь Суный",
  description:
    "Домашние группы в Инчхоне: каждую среду, общение, молитва и жизнь общины.",
};

export default function GroupsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-16 h-[65vh] min-h-[460px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/groups-beach.jpg"
            alt="Группа на пляже"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/20 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pb-16 w-full">
          <p className="text-white/70 text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Домашние группы
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Найди <span className="gradient-text">своих</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            Домашние группы — место где мы становимся семьёй. Собираемся, общаемся,
            молимся друг за друга.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl border border-blue-100 shadow-purple-sm overflow-hidden">
            <div className="h-1.5 bg-gradient-to-r from-violet-600 to-blue-500" />
            <div className="p-6 sm:p-10">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center text-white flex-shrink-0">
                    <Home size={28} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-2">
                      Домашняя группа
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
                      Домашние группы
                    </h2>
                  </div>
                </div>
                <span className="inline-flex self-start px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-100">
                  Открыта для всех
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 mb-6">
                <Clock size={18} className="text-accent flex-shrink-0" />
                <span className="font-semibold">Каждую среду · 20:00–22:00</span>
              </div>

              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-8">
                Небольшие встречи дома где мы обсуждаем воскресные проповеди, делимся тем что
                происходит в жизни и молимся друг за друга. Здесь настоящая жизнь общины.
              </p>

              <div className="rounded-2xl bg-background border border-blue-100 p-5 mb-8 space-y-3">
                <p className="font-bold text-gray-900">Виктор Цой</p>
                <p className="text-gray-600 text-sm sm:text-base">
                  <a
                    href="tel:+821036190770"
                    className="font-semibold text-violet-700 hover:underline"
                  >
                    +82 10 3619 0770
                  </a>
                  <span className="text-gray-400 mx-2">·</span>
                  <a
                    href="https://t.me/TsoyMoksa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-violet-700 hover:underline"
                  >
                    Telegram @TsoyMoksa
                  </a>
                </p>
              </div>

              <a
                href="https://t.me/TsoyMoksa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full gradient-bg text-white font-semibold hover:opacity-90 transition-opacity shadow-purple-md"
              >
                <Send size={18} />
                Написать Виктору
              </a>
            </div>
          </div>

          <p className="mt-8 text-center sm:text-left text-gray-600 text-sm sm:text-base leading-relaxed px-1">
            Точный адрес встречи узнай у Виктора в Telegram —{" "}
            <Link
              href="https://t.me/TsoyMoksa"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent hover:underline"
            >
              @TsoyMoksa
            </Link>
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 border-t border-blue-100/80">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">
            Присоединяйся
          </h2>
          <p className="text-gray-600 mb-8">
            Напиши Виктору — подскажем всё о домашней группе и как попасть на встречу.
          </p>
          <a
            href="https://t.me/TsoyMoksa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-bg text-white font-semibold hover:opacity-90 transition-opacity shadow-purple-md"
          >
            Написать в Telegram →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
