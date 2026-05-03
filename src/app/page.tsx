import Link from "next/link";
import Image from "next/image";
import { Instagram, Send, MapPin, Clock, ChevronRight, MessageCircle, Youtube } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Countdown from "@/components/Countdown";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO SECTION — full bleed background image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-worship.jpg"
            alt="Worship service"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Dark overlay so text pops */}
          <div className="absolute inset-0 bg-black/55" />
          {/* Subtle blue tint at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-accent/30 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-16">
          {/* Animated badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent-end pulse-dot" />
            <span className="text-sm font-medium text-white">
              Русская молодёжь · Инчхон · Суный
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
            <span className="block text-white">Здесь ты</span>
            <span className="block gradient-text">не один.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Живая молодёжная церковь для русскоязычных в Южной Корее —<br className="hidden sm:block" />
            приходи как есть.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/schedule"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white gradient-bg hover:opacity-90 transition-opacity shadow-purple-md"
            >
              Прийти в субботу
              <ChevronRight size={18} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 transition-all"
            >
              Узнать о нас
            </Link>
          </div>
          <p className="mt-8">
            <Link
              href="/schedule"
              className="text-sm font-semibold text-white/90 hover:text-white underline underline-offset-4 decoration-white/35 hover:decoration-white transition-colors"
            >
              Все встречи по дням →
            </Link>
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white" />
        </div>
      </section>

      {/* NEXT EVENT CARD */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="gradient-bg rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)`
              }}
            />
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="space-y-3">
                  <p className="text-white/70 text-xs font-bold tracking-[0.2em] uppercase">
                    Ближайшее служение
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-black">
                    Молодёжное служение
                  </h2>
                  <p className="text-white/80 text-lg">
                    Общение · Worship · Слово
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href="https://kko.to/w4tMXADYdo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-accent font-semibold text-sm hover:bg-white/90 transition-colors"
                  >
                    Как добраться →
                  </a>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/15 rounded-2xl p-5 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock size={18} className="text-white/70" />
                    <span className="text-white/70 text-sm font-medium">Расписание</span>
                  </div>
                  <p className="text-white font-semibold">Общение: 19:00–20:00</p>
                  <p className="text-white font-semibold">Служение: 20:00–22:00</p>
                  <p className="text-white/60 text-sm mt-1">Каждую субботу</p>
                </div>
                <div className="bg-white/15 rounded-2xl p-5 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin size={18} className="text-white/70" />
                    <span className="text-white/70 text-sm font-medium">Адрес</span>
                  </div>
                  <p className="text-white font-semibold">Инчхон, район Суный</p>
                  <a
                    href="https://kko.to/w4tMXADYdo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 text-sm hover:text-white transition-colors mt-1 block"
                  >
                    Открыть на карте →
                  </a>
                </div>
              </div>
              <div className="mt-8 flex justify-center sm:justify-start">
                <Link
                  href="/schedule"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 border border-white/25 text-white text-sm font-semibold hover:bg-white/25 transition-colors"
                >
                  Полное расписание →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTDOWN TIMER */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">
            До следующего служения
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-10">
            Субботнее служение · 20:00 KST
          </h2>
          <Countdown />
          <p className="text-gray-400 text-sm mt-8">
            Время по Корее (UTC+9) · Каждую субботу без исключений
          </p>
        </div>
      </section>

      {/* HOW TO COME — 4 STEPS */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-3">
              Как прийти
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
              Просто. Без формальностей.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                icon: <MessageCircle size={28} />,
                title: "Напиши нам",
                desc: "В Telegram @TsoyMoksa или KakaoTalk — скажи, что хочешь прийти. Ответим быстро.",
              },
              {
                step: "02",
                icon: <Clock size={28} />,
                title: "Приходи к 19:45",
                desc: "Общение начинается в 19:00, служение в 20:00. Лучше чуть раньше — успеешь познакомиться.",
              },
              {
                step: "03",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" />
                  </svg>
                ),
                title: "Одевайся как хочешь",
                desc: "Дресс-код — ты сам. Джинсы, кроссовки, всё что угодно. Главное — приходи.",
              },
              {
                step: "04",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
                  </svg>
                ),
                title: "После — едим вместе",
                desc: "Каждую субботу после служения идём есть вместе. Лучшее место для знакомства.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-6 border border-blue-100 shadow-purple-sm card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <span className="text-4xl font-black text-blue-100">{item.step}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY PHOTO — full bleed with cliff sunset */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/community-cliff.jpg"
            alt="Наше сообщество"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/40 via-transparent to-accent-end/20" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-white/70 text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Сообщество
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Нас уже больше 100
          </h2>
          <p className="text-xl text-white/80 max-w-xl mx-auto mb-10">
            Студенты, работники, молодые семьи — из России, Украины, Казахстана и других стран.
            Все собрались здесь, в Инчхоне.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white gradient-bg hover:opacity-90 transition-opacity shadow-purple-md"
          >
            Узнать о нас →
          </Link>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="border-l-4 border-accent pl-8 py-2">
            <blockquote className="text-2xl sm:text-3xl font-bold text-gray-800 leading-relaxed mb-6">
              &ldquo;Когда я первый раз пришёл, я думал — зайду на часок. Остался на три года.&rdquo;
            </blockquote>
            <cite className="text-gray-500 not-italic font-medium">
              — Алексей, 24 года, приехал учиться в Инчхон
            </cite>
          </div>
        </div>
      </section>

      {/* SOCIAL LINKS ROW */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">
            Мы в соцсетях
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-10">
            Следи за жизнью церкви
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/rusyouthkorea/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-blue-100 shadow-purple-sm hover:border-accent hover:text-accent transition-all card-hover"
            >
              <Instagram size={20} className="text-accent" />
              <span className="font-semibold text-gray-700">Instagram</span>
            </a>
            <a
              href="https://t.me/TsoyMoksa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-blue-100 shadow-purple-sm hover:border-accent hover:text-accent transition-all card-hover"
            >
              <Send size={20} className="text-accent" />
              <span className="font-semibold text-gray-700">Telegram</span>
            </a>
            <a
              href="https://www.youtube.com/@ЦерковьСуный"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-blue-100 shadow-purple-sm hover:border-accent hover:text-accent transition-all card-hover"
            >
              <Youtube size={20} className="text-accent" />
              <span className="font-semibold text-gray-700">YouTube</span>
            </a>
            <a
              href="https://kko.to/w4tMXADYdo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-blue-100 shadow-purple-sm hover:border-accent hover:text-accent transition-all card-hover"
            >
              <MapPin size={20} className="text-accent" />
              <span className="font-semibold text-gray-700">KakaoMap</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
