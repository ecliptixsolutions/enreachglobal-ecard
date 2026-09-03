import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import {
  Phone,
  MessageCircle,
  Mail,
  Globe,
  UserPlus,
  Share2,
  type LucideIcon,
} from "lucide-react";
import { profile, vcard } from "@/lib/ecard-data";

function ActionTile({
  icon: Icon,
  label,
  href,
  onClick,
}: {
  icon: LucideIcon;
  label: string;
  href?: string;
  onClick?: () => void;
}) {
  const inner = (
    <>
      <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <span className="text-sm font-medium">{label}</span>
    </>
  );

  const cls =
    "group surface flex min-h-24 w-full flex-col items-center justify-center gap-2 px-3 py-4 text-center transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0";

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {inner}
      </a>
    );
  }
  return (
    <button type="button" className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}

export function ActionGrid() {
  const [note, setNote] = useState<string | null>(null);

  const saveContact = () => {
    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Kishan-Hirpara-Enreach-Global.vcf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const shareCard = async () => {
    const url = window.location.href;
    const data = {
      title: `${profile.name} | ${profile.company}`,
      text: `Connect with ${profile.name}, ${profile.title} of ${profile.company}.`,
      url,
    };
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(data);
        return;
      } catch {
        /* user dismissed */
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setNote("Card link copied to clipboard");
    } catch {
      setNote(url);
    }
    setTimeout(() => setNote(null), 3000);
  };

  return (
    <section aria-label="Quick actions" className="mt-6">
      <div className="grid grid-cols-2 gap-3">
        <ActionTile icon={Phone} label="Call Now" href={profile.phoneHref} />
        <ActionTile icon={MessageCircle} label="WhatsApp" href={profile.whatsapp} />
        <ActionTile icon={Mail} label="Email" href={`mailto:${profile.email}`} />
        <ActionTile icon={Globe} label="Website" href={profile.website} />
        <ActionTile icon={UserPlus} label="Save Contact" onClick={saveContact} />
        <ActionTile icon={Share2} label="Share Card" onClick={shareCard} />
      </div>
      <p aria-live="polite" className="mt-3 min-h-5 text-center text-xs text-muted-foreground">
        {note}
      </p>
    </section>
  );
}

export function QrSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    QRCode.toCanvas(canvas, window.location.href, {
      width: 208,
      margin: 1,
      color: { dark: "#22364d", light: "#ffffff" },
    })
      .then(() => setReady(true))
      .catch(() => setReady(false));
  }, []);

  const download = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = "enreach-global-card-qr.png";
    a.click();
  };

  return (
    <div className="surface flex flex-col items-center gap-4 p-6">
      <canvas
        ref={canvasRef}
        className="rounded-xl bg-white p-2"
        role="img"
        aria-label={`QR code linking to the ${profile.company} digital card`}
      />
      <p className="text-center text-sm text-muted-foreground">
        Scan to open this card instantly on any device.
      </p>
      <button
        type="button"
        onClick={download}
        disabled={!ready}
        className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        Download QR
      </button>
    </div>
  );
}
