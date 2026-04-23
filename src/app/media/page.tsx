import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Play, Youtube } from "lucide-react";

export const metadata = {
  title: "Медиа — Церковь Суный",
  description:
    "Проповеди и worship Церкви Суный на YouTube. Русскоязычная молодёжная церковь в Инчхоне.",
};

const placeholderSermons = [
  {
    id: "1",
    title: "Живи не по инерции",
    speaker: "Виктор",
    date: "2025-01-18",
    youtube_url: "https://www.youtube.com/@ЦерковьСуный",
    thumbnail_url: "",
    description: "Проповедь о том, как перестать жить на автопилоте и начать жить осознанно.",
  },
  {
    id: "2",
    title: "Страх и вера — два берега",
    speaker: "Виктор",
    date: "2025-01-11",
    youtube_url: "https://www.youtube.com/@ЦерковьСуный",
    thumbnail_url: "",
    description: "Когда страх останавливает — что делает вера?",
  },
  {
    id: "3",
    title: "Одиночество в большом городе",
    speaker: "Виктор",
    date: "2025-01-04",
    youtube_url: "https://www.youtube.com/@ЦерковьСуный",
    thumbnail_url: "",
    description: "Приехать в Корею и не потеряться. О том, как найти своих.",
  },
];

function SermonCard({ sermon }: { sermon: typeof placeholderSermons[0] }) {
  const date = new Date(sermon.date).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-blue-100 shadow-purple-sm card-hover group">
      <div className="relative aspect-video bg-gradient-to-br from-accent/20 to-accent-end/20 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
          <Play size={24} fill="white" />
        </div>
      </div>
      <div className="p-6">
        <p className="text-xs text-gray-400 mb-2">{date} · {sermon.speaker}</p>
        <h3 className="font-bold text-gray-900 text-lg mb-2">{sermon.title}</h3>
        <p className="text-gray-500 text-sm mb-4">{sermon.description}</p>
        <a
          href={sermon.youtube_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
        >
          Смотреть на YouTube →
        </a>
      </div>
    </div>
  );
}

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/8 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">
            Медиа
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
            Проповеди и <span className="gradient-text">Worship</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Смотри записи наших служений на YouTube — где бы ты ни был.
          </p>
          <a
            href="https://www.youtube.com/@ЦерковьСуный"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full gradient-bg text-white font-semibold hover:opacity-90 transition-opacity shadow-purple-sm"
          >
            <Youtube size={20} />
            Наш YouTube канал
          </a>
        </div>
      </section>

      {/* Sermons Grid */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-2">
                Архив
              </p>
              <h2 className="text-2xl font-black text-gray-900">
                Последние проповеди
              </h2>
            </div>
            <a
              href="https://www.youtube.com/@ЦерковьСуный"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-semibold text-sm hover:underline hidden sm:block"
            >
              Все видео →
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderSermons.map((sermon) => (
              <SermonCard key={sermon.id} sermon={sermon} />
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://www.youtube.com/@ЦерковьСуный"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border-2 border-blue-200 text-gray-700 font-semibold hover:border-accent hover:text-accent transition-all"
            >
              <Youtube size={20} />
              Смотреть все на YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Spotify / Worship section */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="gradient-bg rounded-3xl p-8 sm:p-12 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-black mb-4">
              Хочешь попасть на живое служение?
            </h2>
            <p className="text-white/80 mb-8">
              Каждую субботу 20:00 в Инчхоне. Приходи лично — это живее любого видео.
            </p>
            <a
              href="/new"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-accent font-semibold hover:bg-white/90 transition-colors"
            >
              Прийти впервые →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
