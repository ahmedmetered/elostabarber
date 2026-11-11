import { Scissors, Sparkles, Crown } from 'lucide-react';

export function SnippingScissors({ className = '' }: { className?: string }) {
  return <svg className={`snipping-scissors ${className}`} viewBox="0 0 100 100" fill="none" aria-hidden="true"><g className="scissor-blade-a"><circle cx="25" cy="74" r="12" /><path d="M33 65 77 14 53 54" /></g><g className="scissor-blade-b"><circle cx="75" cy="74" r="12" /><path d="M67 65 23 14 47 54" /></g><circle cx="50" cy="53" r="4" /></svg>;
}

export function ServiceIcon({ kind }: { kind: string }) {
  if (kind === 'scissors') return <Scissors />;
  if (kind === 'sparkle') return <Sparkles />;
  if (kind === 'crown') return <Crown />;
  if (kind === 'comb') return <svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M10 8h28v9H10zM12 17v24m6-24v24m6-24v24m6-24v24m6-24v24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>;
  return <svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="m11 31 24-20 6 7-24 20-6-7Zm0 0L6 42l11-4M33 12l-5-6" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="m21 26 12-10" stroke="currentColor" strokeWidth="2" /></svg>;
}

export function BarberScene() {
  return <div className="barber-scene" aria-hidden="true">
    <div className="scene-orbit orbit-one" /><div className="scene-orbit orbit-two" />
    <span className="scene-star star-one">✦</span><span className="scene-star star-two">✦</span><span className="scene-star star-three">✧</span>
    <div className="barber-pole"><div className="pole-cap" /><div className="pole-glass"><div className="pole-stripes" /></div><div className="pole-cap bottom" /><div className="pole-foot" /></div>
    <svg className="chair-art" viewBox="0 0 470 490" fill="none">
      <ellipse className="chair-shadow" cx="252" cy="459" rx="142" ry="19" />
      <path className="metal-dark" d="M205 402h62v27h-62z" /><path className="metal" d="M223 361h28v72h-28z" />
      <path className="metal" d="M237 423c-53 0-96 16-96 27 0 8 44 14 96 14s96-6 96-14c0-11-43-27-96-27Z" />
      <path className="metal-highlight" d="M146 450c44-13 134-13 181 0" />
      <path className="chair-frame" d="m171 195 132-12 19 143-151 25-18-139 18-17Z" />
      <path className="chair-leather" d="m152 131 130-17c15-2 25 7 27 23l13 118c2 14-4 23-17 25l-136 16c-13 2-23-8-24-21l-14-116c-2-15 5-26 21-28Z" />
      <path className="chair-trim" d="m154 141 125-15c11-1 16 4 17 15l13 115c1 10-3 16-13 17l-125 16c-10 1-15-4-16-14l-13-115c-1-11 2-18 12-19Z" />
      <path className="leather-stitch" d="m163 158 119-15m-115 42 119-15m-116 44 120-15m-116 44 119-15m-116 42 120-15" />
      <path className="chair-leather" d="m171 115-5-28c-1-10 4-17 15-18l60-8c10-1 17 5 18 15l4 28-92 11Z" /><path className="chair-trim" d="m178 105 76-9" />
      <path className="metal" d="m135 235-28 11 13 103 26-4-11-110Zm191-24 24-2 21 110-25 4-20-112Z" />
      <path className="chair-leather" d="m102 231 60-9c7-1 11 4 12 11l2 12-72 11-2-25Zm210-34 62-5c8-1 12 4 13 12l1 11-72 8-4-26Z" />
      <path className="chair-frame" d="m134 326 191-23 45 44-191 34-45-55Z" />
      <path className="chair-leather" d="m147 296 151-18c13-2 22 2 30 11l37 43c7 8 3 18-7 20l-167 25c-11 2-18-3-25-12l-34-42c-9-12-1-24 15-27Z" />
      <path className="chair-trim" d="m146 312 39 49 165-26M185 361l-4 12" />
      <path className="metal" d="m180 379-13 50-43 11-7-16 35-10 10-39 18 4Z" /><path className="metal-dark" d="m97 421 66-8 16 17-67 12-15-21Z" />
      <path className="metal-highlight" d="m101 424 62-8M116 431l44-6M121 436l46-7" />
    </svg>
    <div className="scene-seal"><Scissors /><span>EST.</span><b>2024</b></div>
    <div className="scene-line" />
  </div>;
}

export function Confetti() { return <div className="confetti" aria-hidden="true">{Array.from({ length: 18 }, (_, i) => <i key={i} className={`confetti-piece piece-${i % 6}`} />)}</div>; }