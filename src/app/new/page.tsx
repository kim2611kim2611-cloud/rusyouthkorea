import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Send, Phone, Clock, ChevronRight, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Прийти впервые — Церковь Суный",
  description:
    "Первый раз? Вот всё что нужно знать перед первым посещением Церкви Суный в Инчхоне.",
};

export default function NewPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero — first-visit photo */}
      <section className="relative pt-16 h-[65vh] min-h-[480px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/first-visit.jpg"
            alt="Первый визит — молодой человек на служении"
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
            Первый раз?
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Добро пожаловать.<br />
            <span className="gradient-text">Мы тебя ждали.</span>
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            Не нужно ничего знать, уметь или иметь.
            Просто приходи как есть.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-3">
              Частые вопросы
            </p>
            <h2 className="text-3xl font-black text-gray-900">
              Что тебя может волновать
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Я не верующий — можно ли мне прийти?",
                a: "Конечно. У нас нет «своих» и «чужих». Приходи с вопросами, сомнениями или просто из любопытства. Здесь можно быть честным.",
              },
              {
                q: "Нужно ли что-то знать или читать заранее?",
                a: "Нет. Никаких домашних заданий. Приходи с пустыми руками — мы всё объясним на месте.",
              },
              {
                q: "Это только для корейцев или для православных?",
                a: "Мы — русскоязычная молодёжная протестантская церковь для всех. Русские, украинцы, казахи, белорусы — все свои.",
              },
              {
                q: "Во что одеваться?",
                a: "В то, в чём тебе комфортно. Джинсы, кроссовки, пуховик — всё окей. Дресс-код: ты сам.",
              },
              {
                q: "Меня будут заставлять что-то делать?",
                a: "Нет. Можешь просто сидеть и наблюдать. Никакого давления, никаких обязательств.",
              },
              {
                q: "Как найти место?",
                a: "Напиши нам заранее — встретим, покажем как добраться и где припарковаться.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-2xl border border-blue-100 shadow-purple-sm group"
              >
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none">
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  <ChevronRight
                    size={20}
                    className="text-accent flex-shrink-0 transition-transform group-open:rotate-90"
                  />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-3">
              Как прийти
            </p>
            <h2 className="text-3xl font-black text-gray-900">
              Три шага до первого визита
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Напиши нам",
                desc: "В Telegram @TsoyMoksa или по телефону. Скажи что хочешь прийти и когда.",
                icon: <MessageCircle size={24} />,
              },
              {
                step: "2",
                title: "Мы встретим",
                desc: "Скинем точный адрес и встретим тебя у входа — чтобы ты не потерялся.",
                icon: <MapPin size={24} />,
              },
              {
                step: "3",
                title: "Приходи в субботу",
                desc: "Общение с 19:00, служение с 20:00. Лучше приходи к 19:45.",
                icon: <Clock size={24} />,
              },
            ].map((step) => (
              <div key={step.step} className="bg-background rounded-2xl p-6 border border-blue-100 text-center">
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center text-white mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="text-4xl font-black gradient-text mb-2">{step.step}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact block */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="gradient-bg rounded-3xl p-8 sm:p-12 text-white">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-black mb-4">
                Свяжись с нами
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Ответим на все вопросы, встретим и поможем с любым вопросом —
                от как добраться до где остановиться.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://t.me/TsoyMoksa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/25 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Send size={18} />
                  </div>
                  <div>
                    <p className="font-semibold">Telegram</p>
                    <p className="text-white/70 text-sm">@TsoyMoksa</p>
                  </div>
                </a>
                <a
                  href="tel:+821036190770"
                  className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/25 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="font-semibold">Виктор</p>
                    <p className="text-white/70 text-sm">+82 10 3619 0770</p>
                  </div>
                </a>
                <a
                  href="tel:+821077932402"
                  className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/25 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="font-semibold">Ольга</p>
                    <p className="text-white/70 text-sm">+82 10 7793 2402</p>
                  </div>
                </a>
                <a
                  href="https://kko.to/w4tMXADYdo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/25 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-white/70 text-sm">Инчхон, район Суный →</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
