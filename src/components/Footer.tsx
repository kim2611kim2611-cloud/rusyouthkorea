import Link from "next/link";
import { Instagram, Send, MapPin, Phone, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-0.5 font-black text-2xl tracking-tight">
              <span className="text-white">RUS</span>
              <span className="gradient-text">YOUTH</span>
              <span className="text-white">KOREA</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Инчхон · Южная Корея · rusyouthkorea.com
            </p>
            <p className="text-gray-500 text-sm">
              Церковь Суный — живая молодёжная<br />
              церковь для русскоязычных в Корее.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-sm uppercase tracking-widest">
              Разделы
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/about", label: "О нас" },
                { href: "/schedule", label: "Встречи" },
                { href: "/groups", label: "Группы" },
                { href: "/new", label: "Прийти впервые" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-sm uppercase tracking-widest">
              Контакты
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <span>Виктор: +82 10 3619 0770</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <span>Ольга: +82 10 7793 2402</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-accent flex-shrink-0" />
                <a
                  href="https://kko.to/w4tMXADYdo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Инчхон, район Суный
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/rusyouthkorea/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://t.me/TsoyMoksa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Telegram"
              >
                <Send size={18} />
              </a>
              <a
                href="https://www.youtube.com/@ЦерковьСуный"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://kko.to/w4tMXADYdo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="KakaoMap"
              >
                <MapPin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Церковь Суный. Все права защищены.
          </p>
          <p className="text-gray-600 text-xs">
            Инчхон, Южная Корея
          </p>
        </div>
      </div>
    </footer>
  );
}
