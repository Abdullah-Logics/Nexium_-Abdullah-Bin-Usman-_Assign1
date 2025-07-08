import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Quote } from "@/data/quotes";

export default function QuoteCard({ q }: { q: Quote }) {
  return (
    <Card className="w-full max-w-md">
      <CardContent className="pt-6 pb-3 text-lg leading-relaxed">
        &ldquo;{q.text}&rdquo;
      </CardContent>
      <CardFooter className="justify-end italic">— {q.author}</CardFooter>
    </Card>
  );
}
