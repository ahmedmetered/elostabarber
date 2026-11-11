import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Clock, Scissors, UserRound, CalendarDays, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { data, type Language, type Copy, number, price, nextDays, validPhone, isAvailable } from '@/data/barber';
import { Confetti, ServiceIcon, SnippingScissors } from './barber-art';

export function Booking({ lang, selected, setSelected }: { lang: Language; selected: string[]; setSelected: (value: string[]) => void }) {
  const t = (copy: Copy) => copy[lang];
  const [step, setStep] = useState(0);
  const [barber, setBarber] = useState('any');
  const [days] = useState(() => nextDays(new Date()));
  const [day, setDay] = useState<number | null>(null);
  const [slot, setSlot] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState<Copy | null>(null);
  const [success, setSuccess] = useState(false);
  const services = data.services.filter(s => selected.includes(s.id));
  const total = services.reduce((n, s) => n + s.price, 0);
  const duration = services.reduce((n, s) => n + s.duration, 0);
  const DirectionArrow = lang === 'ar' ? ArrowLeft : ArrowRight;
  const BackArrow = lang === 'ar' ? ArrowRight : ArrowLeft;
  const toggle = (id: string) => { setSelected(selected.includes(id) ? selected.filter(v => v !== id) : [...selected, id]); setError(null); };
  function advance() {
    if (step === 0 && !selected.length) { setError(data.serviceError); return; }
    if (step === 2 && (day === null || !isAvailable(slot))) { setError(data.dateError); return; }
    setError(null); setStep(step + 1);
  }
  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (name.trim().length < 2) { setError(data.nameError); return; }
    if (!validPhone(phone)) { setError(data.phoneError); return; }
    setError(null); setSuccess(true);
  }
  const dateLabel = day === null ? '' : days[day]?.toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-GB', { weekday: 'long', day: 'numeric', month: 'long' });
  function reset() { setSuccess(false); setStep(0); setSelected([]); setDay(null); setSlot(''); setName(''); setPhone(''); setNotes(''); setBarber('any'); }
  return <section id="booking" className="booking-section section-pad"><div className="content-width">
    <div className="section-heading"><span className="eyebrow">{t(data.bookingEyebrow)}</span><h2>{t(data.bookingTitle)}</h2></div>
    <div className={`booking-tool ${success ? 'booking-complete' : ''}`}>
      {success ? <div className="success-screen"><Confetti /><SnippingScissors /><span className="eyebrow">{t(data.successTitle)}</span><h3>{t(data.success)}</h3><div className="success-receipt"><p>{services.map(s => t(s.name)).join(' + ')}</p><p>{dateLabel} · <b dir="ltr">{number(slot, lang)}</b></p><strong>{price(total, lang)}</strong></div><Button onClick={reset} variant="outline">{t(data.again)}<DirectionArrow /></Button></div> : <>
      <div className="booking-progress"><ol>{data.steps.map((s, i) => <li key={s.en} className={i <= step ? 'active' : ''}><span>{i < step ? <Check /> : number(i + 1, lang)}</span><b>{t(s)}</b></li>)}</ol><div className={`progress-track progress-${step}`}><i /></div></div>
      <div className="booking-layout"><form className="booking-main" onSubmit={submit} noValidate>
        <div className="booking-step" key={`${step}-${lang}`}>
        <h3>{t([data.chooseServices, data.chooseBarber, data.chooseDate, data.detailsTitle][step] ?? data.chooseServices)}</h3>
        {step === 0 && <><p className="muted-text">{t(data.multiple)}</p><div className="booking-services">{data.services.map(s => <Button key={s.id} variant="selection" className={selected.includes(s.id) ? 'is-selected' : ''} aria-pressed={selected.includes(s.id)} onClick={() => toggle(s.id)}><span className="selection-icon"><ServiceIcon kind={s.icon} /></span><span className="selection-copy"><b>{t(s.name)}</b><small>{number(s.duration, lang)} {t(data.minute)}</small></span><strong>{price(s.price, lang)}</strong><span className="check-box">{selected.includes(s.id) && <Check />}</span></Button>)}</div></>}
        {step === 1 && <div className="barber-options"><Button variant="selection" className={barber === 'any' ? 'is-selected' : ''} onClick={() => setBarber('any')} aria-pressed={barber === 'any'}><span className="mini-avatar any-avatar"><UserRound /></span><span className="selection-copy"><b>{t(data.any)}</b><small>{t(data.anyNote)}</small></span>{barber === 'any' && <Check />}</Button>{data.barbers.map(b => <Button key={b.id} variant="selection" className={barber === b.id ? 'is-selected' : ''} onClick={() => setBarber(b.id)} aria-pressed={barber === b.id}><span className={`mini-avatar avatar-${b.tone}`}>{t(b.initials)}</span><span className="selection-copy"><b>{t(b.name)}</b><small>{t(b.specialty)}</small></span><span>★ {number(b.rating, lang)}</span>{barber === b.id && <Check />}</Button>)}</div>}
        {step === 2 && <><div className="date-scroller">{days.map((d, i) => <Button key={i} variant="date" className={day === i ? 'is-selected' : ''} onClick={() => { setDay(i); setError(null); }} aria-pressed={day === i}><small>{d.toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-GB', { weekday: 'short' })}</small><b>{number(d.getDate(), lang)}</b><small>{d.toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-GB', { month: 'short' })}</small></Button>)}</div><div className="time-slots">{data.slots.map(s => <Button key={s} variant="slot" className={slot === s ? 'is-selected' : ''} disabled={!isAvailable(s)} aria-pressed={slot === s} onClick={() => { setSlot(s); setError(null); }}><Clock /><span dir="ltr">{number(s, lang)}</span></Button>)}</div></>}
        {step === 3 && <div className="details-fields"><label>{t(data.name)}<input value={name} onChange={e => setName(e.target.value)} autoComplete="name" placeholder={t(data.namePlaceholder)} aria-invalid={error === data.nameError} /></label><label>{t(data.phone)}<input value={phone} onChange={e => setPhone(e.target.value)} type="tel" autoComplete="tel" dir="ltr" placeholder={t(data.phonePlaceholder)} aria-invalid={error === data.phoneError} /></label><label>{t(data.notes)}<textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder={t(data.notesPlaceholder)} rows={3} /></label></div>}
        </div>
        {error && <p role="alert" className="form-error">{t(error)}</p>}
        <div className="booking-actions">{step > 0 && <Button variant="ghost" onClick={() => { setStep(step - 1); setError(null); }}><BackArrow />{t(data.back)}</Button>}{step < 3 ? <Button type="button" onClick={advance}>{t(data.next)}<DirectionArrow /></Button> : <Button type="submit">{t(data.submit)}<DirectionArrow /></Button>}</div>
      </form><aside className="booking-summary"><span className="eyebrow">{t(data.summary)}</span><Scissors className="summary-scissors" /><div className="summary-services">{services.length ? services.map(s => <div key={s.id}><span>{t(s.name)}</span><b>{price(s.price, lang)}</b></div>) : <p className="muted-text">{t(data.multiple)}</p>}</div><div className="summary-meta"><p><UserRound />{barber === 'any' ? t(data.any) : t(data.barbers.find(b => b.id === barber)?.name ?? data.any)}</p><p><Clock />{number(duration, lang)} {t(data.minute)}</p>{day !== null && <p><CalendarDays />{dateLabel}</p>}{slot && <p><Clock /><span dir="ltr">{number(slot, lang)}</span></p>}</div><div className="summary-total"><span>{t(data.total)}</span><strong>{price(total, lang)}</strong></div></aside></div>
      </>}
    </div><p className="demo-note"><Phone />{t(data.demo)}</p>
  </div></section>;
}