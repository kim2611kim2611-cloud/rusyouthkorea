"use client";

import { useState, useEffect } from "react";
import { Lock, LogOut, Plus, Trash2, Edit3, Bot, Loader2, Youtube, Calendar } from "lucide-react";

type Tab = "events" | "sermons" | "ai";

/** Temporary until NEXT_PUBLIC_ADMIN_PASSWORD is set in the deployment environment */
const TEMP_ADMIN_PASSWORD = "k123456789";

function isAdminPasswordValid(password: string): boolean {
  if (password === TEMP_ADMIN_PASSWORD) return true;
  const envPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
  return Boolean(envPassword && password === envPassword);
}

function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    await new Promise((r) => setTimeout(r, 400));
    if (isAdminPasswordValid(password)) {
      localStorage.setItem("admin_auth", "true");
      onLogin();
    } else {
      setError("Неверный пароль");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-blue-100 shadow-purple-md w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4">
            <Lock size={28} className="text-white" />
          </div>
          <h1 className="text-2xl font-black text-gray-900 mb-2">Панель управления</h1>
          <p className="text-gray-500 text-sm">Церковь Суный · Admin</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Пароль
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите пароль"
              className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
              required
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl gradient-bg text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 size={18} className="animate-spin" /> : null}
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}

type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  is_recurring: boolean;
};

type Sermon = {
  id: string;
  title: string;
  speaker: string;
  youtube_url: string;
  date: string;
  description: string;
};

function EventsManager() {
  const [events, setEvents] = useState<Event[]>([
    {
      id: "1",
      title: "Молодёжное служение",
      description: "Общение · Worship · Слово",
      date: "",
      time: "20:00",
      location: "Инчхон, район Суный",
      is_recurring: true,
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<Partial<Event>>({
    title: "", description: "", date: "", time: "20:00", location: "Инчхон, район Суный", is_recurring: false,
  });

  const handleAdd = () => {
    if (!form.title) return;
    const newEvent: Event = {
      id: Date.now().toString(),
      title: form.title || "",
      description: form.description || "",
      date: form.date || "",
      time: form.time || "",
      location: form.location || "",
      is_recurring: form.is_recurring || false,
    };
    setEvents([...events, newEvent]);
    setForm({ title: "", description: "", date: "", time: "20:00", location: "Инчхон, район Суный", is_recurring: false });
    setShowForm(false);
  };

  const handleDelete = (id: string) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-black text-gray-900">События</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl gradient-bg text-white text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          <Plus size={16} />
          Добавить
        </button>
      </div>

      {showForm && (
        <div className="bg-background rounded-2xl p-6 border border-blue-100">
          <h3 className="font-bold text-gray-900 mb-4">Новое событие</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              placeholder="Название"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="px-4 py-2.5 rounded-xl border border-blue-100 focus:outline-none focus:border-accent text-sm"
            />
            <input
              placeholder="Место"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              className="px-4 py-2.5 rounded-xl border border-blue-100 focus:outline-none focus:border-accent text-sm"
            />
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="px-4 py-2.5 rounded-xl border border-blue-100 focus:outline-none focus:border-accent text-sm"
            />
            <input
              type="time"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              className="px-4 py-2.5 rounded-xl border border-blue-100 focus:outline-none focus:border-accent text-sm"
            />
            <textarea
              placeholder="Описание"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="px-4 py-2.5 rounded-xl border border-blue-100 focus:outline-none focus:border-accent text-sm sm:col-span-2"
              rows={2}
            />
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={form.is_recurring}
                onChange={(e) => setForm({ ...form, is_recurring: e.target.checked })}
                className="accent-accent"
              />
              Еженедельное событие
            </label>
          </div>
          <div className="flex gap-3 mt-4">
            <button
              onClick={handleAdd}
              className="px-5 py-2 rounded-xl gradient-bg text-white text-sm font-semibold"
            >
              Сохранить
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="px-5 py-2 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600"
            >
              Отмена
            </button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-xl p-5 border border-blue-100 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-gray-900">{event.title}</span>
                {event.is_recurring && (
                  <span className="text-xs bg-blue-50 text-accent px-2 py-0.5 rounded-full">еженедельно</span>
                )}
              </div>
              <p className="text-sm text-gray-500">{event.location} · {event.time}{event.date && ` · ${event.date}`}</p>
              {event.description && <p className="text-sm text-gray-400 mt-1">{event.description}</p>}
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button className="p-2 text-gray-400 hover:text-accent transition-colors">
                <Edit3 size={16} />
              </button>
              <button
                onClick={() => handleDelete(event.id)}
                className="p-2 text-gray-400 hover:text-red-500 transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SermonsManager() {
  const [sermons, setSermons] = useState<Sermon[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<Partial<Sermon>>({
    title: "", speaker: "Виктор", youtube_url: "", date: "", description: "",
  });
  const [loadingYt, setLoadingYt] = useState(false);

  const fetchYouTubeTitle = async (url: string) => {
    if (!url) return;
    setLoadingYt(true);
    try {
      const match = url.match(/(?:v=|youtu\.be\/)([^&\s]{11})/);
      if (match) {
        setForm((prev) => ({ ...prev, title: `Проповедь (${match[1]})` }));
      }
    } finally {
      setLoadingYt(false);
    }
  };

  const handleAdd = () => {
    if (!form.youtube_url) return;
    const newSermon: Sermon = {
      id: Date.now().toString(),
      title: form.title || "",
      speaker: form.speaker || "",
      youtube_url: form.youtube_url || "",
      date: form.date || "",
      description: form.description || "",
    };
    setSermons([...sermons, newSermon]);
    setForm({ title: "", speaker: "Виктор", youtube_url: "", date: "", description: "" });
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-black text-gray-900">Проповеди</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl gradient-bg text-white text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          <Plus size={16} />
          Добавить
        </button>
      </div>

      {showForm && (
        <div className="bg-background rounded-2xl p-6 border border-blue-100">
          <h3 className="font-bold text-gray-900 mb-4">Новая проповедь</h3>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="text-xs font-semibold text-gray-500 mb-1.5 block">YouTube URL</label>
              <div className="flex gap-2">
                <input
                  placeholder="https://youtube.com/watch?v=..."
                  value={form.youtube_url}
                  onChange={(e) => setForm({ ...form, youtube_url: e.target.value })}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-blue-100 focus:outline-none focus:border-accent text-sm"
                />
                <button
                  onClick={() => fetchYouTubeTitle(form.youtube_url || "")}
                  disabled={loadingYt}
                  className="px-4 py-2 rounded-xl border border-blue-200 text-sm text-accent font-semibold flex items-center gap-1"
                >
                  {loadingYt ? <Loader2 size={14} className="animate-spin" /> : <Youtube size={14} />}
                  Загрузить
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                placeholder="Название"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="px-4 py-2.5 rounded-xl border border-blue-100 focus:outline-none focus:border-accent text-sm"
              />
              <input
                placeholder="Проповедник"
                value={form.speaker}
                onChange={(e) => setForm({ ...form, speaker: e.target.value })}
                className="px-4 py-2.5 rounded-xl border border-blue-100 focus:outline-none focus:border-accent text-sm"
              />
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="px-4 py-2.5 rounded-xl border border-blue-100 focus:outline-none focus:border-accent text-sm"
              />
              <textarea
                placeholder="Описание"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="px-4 py-2.5 rounded-xl border border-blue-100 focus:outline-none focus:border-accent text-sm"
                rows={2}
              />
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <button onClick={handleAdd} className="px-5 py-2 rounded-xl gradient-bg text-white text-sm font-semibold">
              Сохранить
            </button>
            <button onClick={() => setShowForm(false)} className="px-5 py-2 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600">
              Отмена
            </button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {sermons.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <Youtube size={40} className="mx-auto mb-3 opacity-40" />
            <p className="text-sm">Добавьте первую проповедь</p>
          </div>
        )}
        {sermons.map((sermon) => (
          <div key={sermon.id} className="bg-white rounded-xl p-5 border border-blue-100 flex items-start justify-between gap-4">
            <div>
              <p className="font-bold text-gray-900">{sermon.title}</p>
              <p className="text-sm text-gray-500">{sermon.speaker} · {sermon.date}</p>
              <a href={sermon.youtube_url} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline">
                {sermon.youtube_url}
              </a>
            </div>
            <button
              onClick={() => setSermons(sermons.filter((s) => s.id !== sermon.id))}
              className="p-2 text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function AIAssistant() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResult("");
    try {
      const res = await fetch("/api/ai-content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResult(data.content || data.error || "Ошибка генерации");
    } catch {
      setResult("Ошибка подключения к API");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const examples = [
    "Напиши анонс субботнего молодёжного служения на следующую неделю",
    "Создай описание для новой малой группы по теме 'Кино и вера'",
    "Напиши пост для Instagram о нашем служении",
    "Создай описание проповеди 'Как не потеряться в большом городе'",
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-2">ИИ-помощник</h2>
        <p className="text-gray-500 text-sm">
          Генерация контента для сайта с помощью Claude AI
        </p>
      </div>

      {/* Examples */}
      <div>
        <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">Быстрые примеры</p>
        <div className="flex flex-wrap gap-2">
          {examples.map((ex) => (
            <button
              key={ex}
              onClick={() => setPrompt(ex)}
              className="text-xs px-3 py-1.5 rounded-full bg-white border border-blue-100 text-gray-600 hover:border-accent hover:text-accent transition-colors"
            >
              {ex}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Ваш запрос
        </label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Опишите что нужно создать — анонс, описание, пост, текст для страницы..."
          className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none text-sm"
          rows={4}
        />
      </div>

      <button
        onClick={handleGenerate}
        disabled={loading || !prompt.trim()}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Генерирую...
          </>
        ) : (
          <>
            <Bot size={18} />
            Сгенерировать
          </>
        )}
      </button>

      {/* Result */}
      {result && (
        <div className="bg-white rounded-2xl border border-blue-100 overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 border-b border-blue-50">
            <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Bot size={16} className="text-accent" />
              Результат
            </span>
            <button
              onClick={handleCopy}
              className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold hover:bg-accent/20 transition-colors"
            >
              {copied ? "Скопировано!" : "Копировать"}
            </button>
          </div>
          <div className="p-5">
            <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">{result}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminPage() {
  const [isAuthed, setIsAuthed] = useState(false);
  const [tab, setTab] = useState<Tab>("events");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const auth = localStorage.getItem("admin_auth");
    if (auth === "true") setIsAuthed(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("admin_auth");
    setIsAuthed(false);
  };

  if (!mounted) return null;
  if (!isAuthed) return <AdminLogin onLogin={() => setIsAuthed(true)} />;

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "events", label: "События", icon: <Calendar size={18} /> },
    { id: "sermons", label: "Проповеди", icon: <Youtube size={18} /> },
    { id: "ai", label: "ИИ-помощник", icon: <Bot size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Admin header */}
      <header className="bg-white border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <Lock size={14} className="text-white" />
            </div>
            <div>
              <p className="font-black text-gray-900 text-sm">Admin Panel</p>
              <p className="text-xs text-gray-400">Церковь Суный</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <LogOut size={16} />
            Выйти
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 bg-white rounded-2xl p-1.5 border border-blue-100 w-fit">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                tab === t.id
                  ? "gradient-bg text-white shadow-purple-sm"
                  : "text-gray-600 hover:text-accent"
              }`}
            >
              {t.icon}
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-purple-sm">
          {tab === "events" && <EventsManager />}
          {tab === "sermons" && <SermonsManager />}
          {tab === "ai" && <AIAssistant />}
        </div>
      </div>
    </div>
  );
}
