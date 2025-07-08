"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props { onRandom(): void; onSearch(t: string): void; }

export default function SearchBar({ onRandom, onSearch }: Props) {
  const [val, setVal] = useState("");
  return (
    <form onSubmit={e => { e.preventDefault(); onSearch(val); }} className="flex gap-2">
      <Input className="w-72" placeholder="Search topic / author / word…" value={val}
             onChange={e => setVal(e.target.value)} />
      <Button type="submit">Search</Button>
      <Button type="button" variant="secondary" onClick={onRandom}>Random Quote</Button>
    </form>
  );
}
