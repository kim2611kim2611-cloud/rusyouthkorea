import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Countdown from "@/components/Countdown";
import { MapPin, Clock, Send } from "lucide-react";

export const metadata = {
  title: "Расписание — Церковь Суный",
  description:
    "Еженедельное расписание: домашние и молитвенные собрания, спорт, молодёжное служение по субботам в Инчхоне.",
};

type Category = "spiritual" | "sports" | "fellowship";

type Contact = {
  name: string;
  phone: string;
  phoneTel: string;
  telegram: string;
};

type ScheduleEvent = {
  time: string;
  title: string;
  description: string;
  category: Category;
  contact: Contact;
};

type DayBlock =
  | {
      kind: "weekly";
      dayLabel: string;
      events: ScheduleEvent[];
    }
  | {
      kind: "monthly";
      dayLabel: string;
      subtitle: string;
      events: ScheduleEvent[];
    };

const victor: Contact = {
  name: "Виктор Цой",
  phone: "+82 10 3619 0770",
  phoneTel: "+821036190770",
  telegram: "TsoyMoksa",
};

const stanislav: Contact = {
  name: "Ким Станислав",
  phone: "+82 10 3939 1327",
  phoneTel: "+821039391327",
  telegram: "pastorkim",
};

const john: Contact = {
  name: "Хан Джон",
  phone: "+82 10 4868 2442",
  phoneTel: "+821048682442",
  telegram: "JohnHan24",
};

const categoryClass: Record<
  Category,
  { card: string; badge: string; label: string }
> = {
  spiritual: {
    card: "border-l-4 border-violet-600 bg-gradient-to-r from-violet-50/90 to-blue-50/50",
    badge: "bg-violet-100 text-violet-800",
    label: "Служение",
  },
  sports: {
    card: "border-l-4 border-emerald-600 bg-gradient-to-r from-emerald-50/90 to-teal-50/40",
    badge: "bg-emerald-100 text-emerald-800",
    label: "Спорт",
  },
  fellowship: {
    card: "border-l-4 border-orange-500 bg-gradient-to-r from-orange-50/90 to-amber-50/40",
    badge: "bg-orange-100 text-orange-800",
    label: "Общение",
  },
};

const scheduleByDay: DayBlock[] = [
  {
    kind: "weekly",
    dayLabel: "Среда",
    events: [
      {
        time: "20:00 – 22:00",
        title: "Домашнее собрание",
        description: "Встреча в небольшой группе, Слово и общение по домам.",
        category: "spiritual",
        contact: victor,
      },
    ],
  },
  {
    kind: "weekly",
    dayLabel: "Пятница",
    events: [
      {
        time: "20:30 – 22:00",
        title: "Молитвенное собрание",
        description: "Совместная молитва за церковь, людей и нужды сообщества.",
        category: "spiritual",
        contact: victor,
      },
      {
        time: "23:00 – 01:00",
        title: "Футбол",
        description: "Для всех — приходи как есть, без подготовки.",
        category: "sports",
        contact: stanislav,
      },
    ],
  },
  {
    kind: "weekly",
    dayLabel: "Суббота",
    events: [
      {
        time: "19:00 – 20:00",
        title: "Группа общения",
        description: "Знакомство и разговор перед служением.",
        category: "fellowship",
        contact: victor,
      },
      {
        time: "20:00 – 22:00",
        title: "Молодёжное служение",
        description: "Worship · Слово · Молитва.",
        category: "spiritual",
        contact: victor,
      },
      {
        time: "После 22:00",
        title: "Ужин вместе",
        description: "Продолжаем общение за едой после служения.",
        category: "fellowship",
        contact: victor,
      },
    ],
  },
  {
    kind: "monthly",
    dayLabel: "Воскресенье",
    subtitle: "Каждое первое воскресенье месяца",
    events: [
      {
        time: "16:00 – 19:00",
        title: "Баскетбол",
        description: "Для всех — приходи как есть.",
        category: "sports",
        contact: john,
      },
    ],
  },
];

function ContactRow({ contact }: { contact: Contact }) {
  const tgUrl = `https://t.me/${contact.telegram}`;
  return (
    <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-3 pt-4 border-t border-gray-200/80">
      <p className="text-sm font-semibold text-gray-900">{contact.name}</p>
      <a
        href={`tel:${contact.phoneTel}`}
        className="text-sm font-medium text-violet-700 hover:text-violet-900 underline-offset-2 hover:underline"
      >
        {contact.phone}
      </a>
      <a
        href={tgUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-sky-500 text-white text-sm font-semibold hover:bg-sky-600 transition-colors w-fit"
      >
        <Send size={16} className="flex-shrink-0" />
        Telegram @{contact.telegram}
      </a>
    </div>
  );
}

function EventCard({ event }: { event: ScheduleEvent }) {
  const cat = categoryClass[event.category];
  return (
    <div
      className={`rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100/80 ${cat.card}`}
    >
      <div className="flex flex-wrap items-center gap-2 gap-y-1 mb-2">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${cat.badge}`}
        >
          {cat.label}
        </span>
        <span className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-800">
          <Clock size={16} className="text-gray-500 flex-shrink-0" />
          {event.time}
        </span>
      </div>
      <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-2">
        {event.title}
      </h3>
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
        {event.description}
      </p>
      <ContactRow contact={event.contact} />
    </div>
  );
}

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 sm:pt-32 pb-10 px-4 sm:px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-accent/8 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">
            Расписание
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4">
            Еженедельное <span className="gradient-text">расписание</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Домашние группы, молитва, спорт и молодёжное служение — Инчхон, на
            русском.
          </p>
          <div className="rounded-2xl bg-amber-50 border border-amber-200/80 px-4 py-3 text-sm text-amber-950 text-left sm:text-center max-w-xl mx-auto leading-relaxed">
            <span className="font-semibold">Адрес:</span> точное место —
            напиши в Telegram{" "}
            <a
              href="https://t.me/TsoyMoksa"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-violet-700 hover:underline"
            >
              @TsoyMoksa
            </a>
          </div>
        </div>
      </section>

      <section className="py-6 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-10">
          {scheduleByDay.map((block) => (
            <div
              key={block.dayLabel + (block.kind === "monthly" ? "monthly" : "")}
              className="bg-white rounded-3xl border border-blue-100 shadow-purple-sm overflow-hidden"
            >
              <div className="px-5 sm:px-8 pt-6 sm:pt-8 pb-2 border-b border-blue-50/80 bg-gradient-to-r from-white to-blue-50/30">
                <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                  {block.dayLabel}
                </h2>
                {block.kind === "monthly" && (
                  <p className="text-sm text-gray-500 mt-1 font-medium">
                    {block.subtitle}
                  </p>
                )}
              </div>
              <div className="p-5 sm:p-8 space-y-6">
                {block.events.map((event) => (
                  <EventCard key={event.title + event.time} event={event} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-blue-100 shadow-purple-sm">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center text-white flex-shrink-0">
                <MapPin size={28} />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
                  Где мы собираемся
                </h2>
                <p className="text-gray-600 font-semibold mb-1">
                  Инчхон, район Суный
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  Южная Корея · Подробности и встреча у входа — в Telegram.
                </p>
                <a
                  href="https://kko.to/w4tMXADYdo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-bg text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Открыть на KakaoMap
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white border-y border-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">
            До молодёжного служения
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            Суббота · 20:00 KST
          </h2>
          <p className="text-gray-500 text-sm mb-10">
            Время по Корее (UTC+9)
          </p>
          <Countdown />
        </div>
      </section>

      <Footer />
    </div>
  );
}
