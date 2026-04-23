import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `Ты помощник администратора русскоязычной молодёжной церкви Суный в Инчхоне, Южная Корея. Помогай создавать контент для сайта — анонсы мероприятий, описания проповедей, тексты для разделов. Пиши живо, молодёжно, без религиозного пафоса. Отвечай на русском языке.

Контекст:
- Церковь называется "Церковь Суный" (순의교회)
- Сайт: rusyouthkorea.com
- Молодёжное служение каждую субботу: общение 19:00-20:00, служение 20:00-22:00
- Адрес: Инчхон, район Суный, Южная Корея
- Контакты: Виктор +82 10 3619 0770, Ольга +82 10 7793 2402
- Telegram: @TsoyMoksa
- Instagram: @rusyouthkorea
- YouTube: @ЦерковьСуный`;

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "Запрос не может быть пустым" }, { status: 400 });
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: "ANTHROPIC_API_KEY не настроен. Добавьте ключ в переменные окружения." },
        { status: 500 }
      );
    }

    const message = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: prompt }],
    });

    const content = message.content[0];
    if (content.type !== "text") {
      throw new Error("Unexpected response type");
    }

    return NextResponse.json({ content: content.text });
  } catch (error) {
    console.error("AI API error:", error);
    if (error instanceof Anthropic.APIError) {
      return NextResponse.json(
        { error: `Ошибка API: ${error.message}` },
        { status: error.status }
      );
    }
    return NextResponse.json(
      { error: "Произошла ошибка при генерации контента" },
      { status: 500 }
    );
  }
}
