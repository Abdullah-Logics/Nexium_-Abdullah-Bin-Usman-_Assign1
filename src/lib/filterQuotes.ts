import { QUOTES, Quote } from "@/data/quotes";

const pick = <T>(a: T[]) => a[Math.floor(Math.random() * a.length)];

export const randomQuote = (): Quote => pick(QUOTES);

export const searchQuotes = (term: string): Quote[] => {
  if (!term.trim()) return [];
  const r = new RegExp(term.trim(), "i");
  return QUOTES.filter(q => r.test(q.text) || r.test(q.author) || r.test(q.topic)).slice(0, 3);
};
