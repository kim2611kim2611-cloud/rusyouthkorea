import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Heart, Users, Globe, Zap } from "lucide-react";

export const metadata = {
  title: "О нас — Церковь Суный",
  description:
    "Узнай кто мы, во что верим и как появилась русская молодёжная церковь в Инчхоне.",
};

const values = [
  {
    icon: <Heart size={24} />,
    title: "Живые отношения",
    desc: "Не сцена и зрители — а семья. Мы строим настоящие отношения, где каждый важен.",
  },
  {
    icon: <Users size={24} />,
    title: "Твоё поколение",
    desc: "Молодые люди от 18 до 35 из России, Украины, Казахстана и других русскоязычных стран.",
  },
  {
    icon: <Globe size={24} />,
    title: "Далеко от дома — не одни",
    desc: "Приехал учиться или работать в Корею? Здесь найдёшь своих. По-настоящему.",
  },
  {
    icon: <Zap size={24} />,
    title: "Без религиозного шаблона",
    desc: "Мы верим живо. Worship, слово, честные разговоры — без формальностей и принуждения.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero — stage photo with full team */}
      <section className="relative pt-16 h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-stage.jpg"
            alt="Команда церкви на сцене"
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/20 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pb-16 w-full">
          <p className="text-white/70 text-xs font-bold tracking-[0.2em] uppercase mb-3">
            О нас
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            Мы — <span className="gradient-text">живая церковь</span><br />
            для русских в Корее
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            Русскоязычная молодёжная церковь в Инчхоне, Южная Корея.
            Каждую субботу. Для всех.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">
                Наша история
              </p>
              <h2 className="text-3xl font-black text-gray-900 mb-6">
                Всё начиналось с нескольких человек
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Церковь Суный появилась из простого желания — дать русскоязычной молодёжи
                  в Инчхоне место, где они могут встретить Бога на родном языке
                  и найти настоящих друзей.
                </p>
                <p>
                  Сегодня каждую субботу к нам приходят студенты, работники,
                  молодые семьи — все, кто хочет жить в вере и не чувствовать себя
                  одиноким в чужой стране.
                </p>
                <p>
                  Мы часть корейской церкви Суный (순의교회), но служение ведём
                  на русском языке — для наших.
                </p>
              </div>
            </div>
            <div className="bg-background rounded-3xl p-8 border border-blue-100">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: "100+", label: "участников сообщества" },
                  { num: "52", label: "субботы в году" },
                  { num: "10+", label: "стран происхождения" },
                  { num: "∞", label: "борщей после служения" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-black gradient-text mb-1">{stat.num}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-3">
              Наши ценности
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
              Во что мы верим
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((val) => (
              <div
                key={val.title}
                className="bg-white rounded-2xl p-7 border border-blue-100 shadow-purple-sm card-hover"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white mb-4">
                  {val.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">{val.title}</h3>
                <p className="text-gray-500 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-3">
            Команда
          </p>
          <h2 className="text-3xl font-black text-gray-900 mb-12">
            Кто нас ведёт
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            {[
              { name: "Виктор", role: "Пастор молодёжи", phone: "+82 10 3619 0770" },
              { name: "Ольга", role: "Координатор", phone: "+82 10 7793 2402" },
            ].map((person) => (
              <div key={person.name} className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center text-white text-2xl font-black">
                  {person.name[0]}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">{person.name}</p>
                  <p className="text-gray-500 text-sm">{person.role}</p>
                  <a href={`tel:${person.phone.replace(/\s/g, "")}`} className="text-accent text-sm hover:underline">
                    {person.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
            Готов прийти?
          </h2>
          <p className="text-gray-600 mb-8">
            Каждую субботу в 20:00. Инчхон, район Суный.
          </p>
          <Link
            href="/new"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white gradient-bg hover:opacity-90 transition-opacity shadow-purple-md"
          >
            Прийти впервые →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
