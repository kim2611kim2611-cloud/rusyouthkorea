import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Малые группы — Церковь Суный",
  description:
    "Малые группы Церкви Суный — общение по интересам, дружба и рост в вере.",
};

const groups = [
  {
    name: "Студенческая группа",
    leader_name: "Виктор",
    schedule: "Пятница, 19:00",
    description:
      "Для студентов корейских университетов. Обсуждаем жизнь, веру, учёбу и всё что между ними.",
    interests: ["Учёба", "Корейский язык", "Вера", "Карьера"],
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Творческие",
    leader_name: "Ольга",
    schedule: "Среда, 19:30",
    description:
      "Музыканты, художники, фотографы, дизайнеры. Для тех, кто выражает себя через творчество.",
    interests: ["Музыка", "Искусство", "Дизайн", "Фото"],
    color: "from-sky-500 to-blue-500",
  },
  {
    name: "Спорт и здоровье",
    leader_name: "Алексей",
    schedule: "Вторник + Четверг, 7:00",
    description:
      "Утренние пробежки, тренировки, обсуждение здорового образа жизни. Тело и дух — вместе.",
    interests: ["Спорт", "Фитнес", "Здоровье", "Бег"],
    color: "from-emerald-500 to-teal-600",
  },
];

export default function GroupsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero — beach photo */}
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
            Малые группы
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Найди <span className="gradient-text">своих</span>
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            Малые группы — место, где церковь становится семьёй.
            По интересам, расписанию и жизненному этапу.
          </p>
        </div>
      </section>

      {/* Groups */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((group) => (
              <div
                key={group.name}
                className="bg-white rounded-2xl overflow-hidden border border-blue-100 shadow-purple-sm card-hover"
              >
                <div className={`h-2 bg-gradient-to-r ${group.color}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center text-white`}>
                      <Users size={22} />
                    </div>
                    <span className="text-xs bg-blue-50 text-accent px-3 py-1 rounded-full font-semibold">
                      {group.schedule}
                    </span>
                  </div>
                  <h3 className="font-black text-gray-900 text-xl mb-2">{group.name}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{group.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {group.interests.map((tag) => (
                      <span key={tag} className="text-xs bg-background text-gray-600 px-3 py-1 rounded-full border border-blue-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Users size={14} />
                    <span>Лидер: {group.leader_name}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Join any group card */}
            <div className="gradient-bg rounded-2xl p-6 flex flex-col justify-between text-white">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <MessageCircle size={22} />
                </div>
                <h3 className="font-black text-xl mb-2">Своя группа?</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Хочешь начать новую группу по твоей теме?
                  Напиши нам — поможем запустить.
                </p>
              </div>
              <a
                href="https://t.me/TsoyMoksa"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white text-accent font-semibold text-sm hover:bg-white/90 transition-colors"
              >
                Написать в Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is a small group */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-3">
              Зачем группы?
            </p>
            <h2 className="text-3xl font-black text-gray-900">
              Большая церковь — хорошо.<br />
              Малая группа — необходимость.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Настоящие друзья",
                desc: "Люди знают тебя по имени, а не в лицо. Здесь рождается настоящая дружба.",
              },
              {
                title: "Рост в вере",
                desc: "Читаем Слово, обсуждаем жизнь, молимся друг за друга. Вера становится живой.",
              },
              {
                title: "Практическая помощь",
                desc: "Помогут переехать, разобраться с корейской бюрократией, найти врача.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-background rounded-2xl p-6 border border-blue-100">
                <h3 className="font-bold text-gray-900 text-lg mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            Хочешь в группу?
          </h2>
          <p className="text-gray-600 mb-8">
            Напиши нам — расскажем о ближайших группах и поможем выбрать.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://t.me/TsoyMoksa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-bg text-white font-semibold hover:opacity-90 transition-opacity shadow-purple-md"
            >
              Написать в Telegram →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
