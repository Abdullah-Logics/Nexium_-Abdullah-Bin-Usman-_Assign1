"use client";
import { useState } from "react";
import QuoteCard from "@/components/ui/QuoteCard";
import SearchBar from "@/components/ui/SearchBar";
import { randomQuote, searchQuotes } from "@/lib/filterQuotes";
import type { Quote } from "@/data/quotes";

export default function Home() {
  const [quotes, setQuotes] = useState<Quote[]>([randomQuote()]);

  return (
    <main className="min-h-screen flex flex-col items-center gap-8 py-16">
      <SearchBar
        onRandom={() => setQuotes([randomQuote()])}
        onSearch={t => {
          const hits = searchQuotes(t);
          setQuotes(hits.length ? hits : [{ text: "No match found.", author: "", topic: "" }]);
        }}
      />
      <section className="flex flex-col gap-6">
        {quotes.map((q, i) => <QuoteCard key={i} q={q} />)}
      </section>
    </main>
  );
}
