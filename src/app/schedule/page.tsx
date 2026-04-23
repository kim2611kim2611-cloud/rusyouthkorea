import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Countdown from "@/components/Countdown";
import { MapPin, Clock, Calendar, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Встречи — Церковь Суный",
  description:
    "Молодёжное служение каждую субботу в Инчхоне. Общение 19:00, служение 20:00–22:00.",
};

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-accent/8 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">
            Встречи
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
            Каждую субботу.<br />
            <span className="gradient-text">Без исключений.</span>
          </h1>
          <p className="text-lg text-gray-600">
            Молодёжное служение в Инчхоне — это живо, по-настоящему и на русском.
          </p>
        </div>
      </section>

      {/* Main event card */}
      <section className="py-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="gradient-bg rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)`
              }}
            />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Calendar size={18} className="text-white/70" />
                <span className="text-white/70 text-sm font-semibold tracking-wide uppercase">
                  Еженедельно · Суббота
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black mb-2">
                Молодёжное служение
              </h2>
              <p className="text-white/80 text-lg mb-8">Общение · Worship · Слово · Ужин</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white/15 rounded-2xl p-5 backdrop-blur-sm">
                  <Clock size={20} className="text-white/60 mb-2" />
                  <p className="font-bold text-lg">19:00 – 20:00</p>
                  <p className="text-white/70 text-sm">Общение / Знакомство</p>
                </div>
                <div className="bg-white/15 rounded-2xl p-5 backdrop-blur-sm">
                  <Clock size={20} className="text-white/60 mb-2" />
                  <p className="font-bold text-lg">20:00 – 22:00</p>
                  <p className="text-white/70 text-sm">Молодёжное служение</p>
                </div>
                <div className="bg-white/15 rounded-2xl p-5 backdrop-blur-sm">
                  <Clock size={20} className="text-white/60 mb-2" />
                  <p className="font-bold text-lg">После 22:00</p>
                  <p className="text-white/70 text-sm">Ужин вместе</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-blue-100 shadow-purple-sm">
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center text-white flex-shrink-0">
                <MapPin size={28} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-black text-gray-900 mb-3">
                  Где мы находимся
                </h2>
                <p className="text-gray-600 mb-2 text-lg font-semibold">
                  Инчхон, район Суный
                </p>
                <p className="text-gray-500 mb-6">
                  Южная Корея · Точный адрес — в Telegram или на карте
                </p>
                <a
                  href="https://kko.to/w4tMXADYdo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-bg text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Открыть на KakaoMap
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">
            Таймер
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-10">
            До следующего служения
          </h2>
          <Countdown />
        </div>
      </section>

      {/* What to expect */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-3">
              Что тебя ждёт
            </p>
            <h2 className="text-3xl font-black text-gray-900">
              Программа вечера
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                time: "19:00",
                title: "Общение",
                desc: "Приходи пораньше — познакомиться, поговорить, почувствовать атмосферу до начала служения.",
                color: "from-blue-500 to-blue-600",
              },
              {
                time: "20:00",
                title: "Worship",
                desc: "Живая музыка, русские и корейские песни прославления — вход в присутствие Бога.",
                color: "from-blue-600 to-sky-400",
              },
              {
                time: "20:40",
                title: "Слово",
                desc: "Проповедь на русском — живо, актуально, практично. Без скуки и религиозного языка.",
                color: "from-sky-500 to-blue-500",
              },
              {
                time: "21:30",
                title: "Молитва и общение",
                desc: "Время для молитвы, вопросов и личных разговоров. Никто не уходит без ответа.",
                color: "from-blue-400 to-sky-500",
              },
              {
                time: "22:00+",
                title: "Ужин вместе",
                desc: "Каждую субботу едём есть — обычно корейская еда. Лучшее место для знакомства.",
                color: "from-sky-400 to-blue-400",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-xs font-bold`}>
                  {item.time}
                </div>
                <div className="flex-1 bg-white rounded-2xl p-5 border border-blue-100 shadow-purple-sm">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
