"use client";
import { useState, type FormEvent, type ReactNode } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { PinIcon, MailIcon, PhoneIcon, ClockIcon, ShieldCheckIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "../ui/Icons";

type Mode = "company" | "volunteer";

const field = "w-full rounded-s border border-white/25 bg-white/[.07] px-3.5 py-3 font-sans text-[14.5px] text-white placeholder:text-white/40";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="mb-[18px] block">
      <span className="mb-[7px] block text-[13px] font-semibold text-white/70">{label}</span>
      {children}
    </label>
  );
}

const Input = ({ type = "text", placeholder }: { type?: string; placeholder: string }) => <input type={type} placeholder={placeholder} className={field} />;
const Select = ({ options }: { options: string[] }) => (
  <select className={`${field} [&>option]:text-black`}>
    {options.map((o) => (
      <option key={o}>{o}</option>
    ))}
  </select>
);

const info = [
  { Icon: PinIcon, title: "Address", text: "Jl. Anggrek, Curug, Kec. Cimanggis, Kota Depok, Jawa Barat 16453" },
  { Icon: MailIcon, title: "Email", text: "info@solusidampakglobal.org" },
  { Icon: PhoneIcon, title: "Phone / WhatsApp", text: "+62 21 8765 4321" },
  { Icon: ClockIcon, title: "Operating Hours", text: "Monday–Friday, 09:00–17:00 WIB" },
];

export default function Contact() {
  const [mode, setMode] = useState<Mode>("company");
  const onSubmit = (e: FormEvent) => e.preventDefault(); // TODO: connect to backend / API

  const toggle = (m: Mode, label: string, active: string) => (
    <button type="button" aria-pressed={mode === m} onClick={() => setMode(m)} className={`cursor-pointer rounded-[4px] px-5 py-2.5 text-sm font-bold ${mode === m ? active : "bg-transparent text-white/75"}`}>
      {label}
    </button>
  );

  return (
    <section className="bg-deep py-14 text-white md:py-[88px]">
      <Container>
        <h2 className="max-w-[480px] text-[32px] text-white">Start a Conversation With Our Team</h2>
        <p className="mt-3.5 max-w-[480px] text-[15.5px] text-white/70">Whether you represent a company looking to manage a CSR/ESG program, or an individual who wants to get involved on the ground — tell us what you need.</p>
        <div className="mt-8 inline-flex gap-1 rounded-xl bg-white/[.12] p-[5px]">
          {toggle("company", "I'm a Company", "bg-primary text-white")}
          {toggle("volunteer", "I'm a Volunteer", "bg-gold text-ink")}
        </div>

        <div className="mt-10 grid gap-14 md:grid-cols-[1.2fr_.8fr]">
          <form onSubmit={onSubmit}>
            {mode === "company" ? (
              <>
                <Field label="Company Name">
                  <Input placeholder="e.g. PT Nusantara Sejahtera" />
                </Field>
                <Field label="Contact Person">
                  <Input placeholder="Your name" />
                </Field>
                <Field label="Work Email">
                  <Input type="email" placeholder="name@company.com" />
                </Field>
                <Field label="Phone Number">
                  <Input type="tel" placeholder="08xx xxxx xxxx" />
                </Field>
                <Field label="Service of Interest">
                  <Select options={["Project Implementation", "Capacity Building", "Consultation", "Compliance", "Recognize"]} />
                </Field>
              </>
            ) : (
              <>
                <Field label="Full Name">
                  <Input placeholder="Your full name" />
                </Field>
                <Field label="Email">
                  <Input type="email" placeholder="you@email.com" />
                </Field>
                <Field label="Phone Number">
                  <Input type="tel" placeholder="08xx xxxx xxxx" />
                </Field>
                <Field label="Area of Interest">
                  <Select options={["Community Development", "Environmental Programs", "Education & Training", "Disaster Response"]} />
                </Field>
                <Field label="Availability">
                  <Select options={["Weekdays", "Weekends", "Flexible"]} />
                </Field>
              </>
            )}
            <Field label="Message">
              <textarea placeholder="Tell us about your needs" className={`${field} min-h-[100px] resize-y`} />
            </Field>
            <Button type="submit">{mode === "company" ? "Send Message" : "Join as Volunteer"}</Button>
          </form>

          <div>
            <h3 className="mb-2.5 text-base text-white">Contact Information</h3>
            <p className="mb-[22px] max-w-[340px] text-[13.5px] text-white/70">Prefer to reach us directly? Use any of the channels below — our team typically responds within one business day.</p>
            {info.map(({ Icon, title, text }) => (
              <div key={title} className="flex items-start gap-3.5 border-t border-white/[.14] py-4 first:border-t-0 first:pt-0">
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px] bg-white/10">
                  <Icon className="h-[18px] w-[18px] text-white" />
                </div>
                <div className="text-[14.5px] text-white/80">
                  <b className="mb-[3px] block text-[13px] font-bold text-white">{title}</b>
                  {text}
                </div>
              </div>
            ))}

            <div className="mt-[26px] flex items-center gap-2.5 rounded-s bg-white/[.07] px-4 py-3.5 text-[13px] text-white/80">
              <ShieldCheckIcon className="h-4 w-4 shrink-0 text-white" />
              Our teams average response time: under 1 business day
            </div>

            <div className="mt-[26px] grid grid-cols-2 gap-3.5">
              {[
                ["80+", "Active programs"],
                ["15+", "Provinces reached"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-s bg-white/[.07] p-4">
                  <div className="text-[22px] font-extrabold text-white">{n}</div>
                  <div className="mt-1 text-xs text-white/65">{l}</div>
                </div>
              ))}
            </div>

            <div className="my-[26px] border-t border-white/[.14]" />
            <b className="mb-2.5 block text-[13px] font-bold text-white">Follow Us</b>
            <div className="mt-2 flex gap-2.5">
              {[
                ["Instagram", InstagramIcon],
                ["LinkedIn", LinkedinIcon],
                ["YouTube", YoutubeIcon],
              ].map(([name, Icon]) => {
                const I = Icon as typeof InstagramIcon;
                return (
                  <a key={name as string} href="#" aria-label={name as string} className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
                    <I className="h-4 w-4 text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
