// components/SocialLinks.js
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileDownload,
} from "@tabler/icons-react";

export default function SocialLinks() {
  return (
    // === HIER SIND DIE ÄNDERUNGEN ===
    // 1. 'hidden md:flex': Auf Mobilgeräten (klein) versteckt, ab 'md' (Desktop) als flex angezeigt.
    // 2. 'top-24': Positioniert es 6rem (96px) von oben (direkt unter deiner Navbar).
    // 3. 'top-1/2 -translate-y-1/2' (die alte Position) wurde entfernt.
    //
    // هذا الكود الجديد:
    <div className="hidden md:flex flex-col fixed left-0 top-24 z-40">
      {/* (Restlicher Inhalt bleibt gleich) */}
      <div className="flex flex-col gap-2 p-2 bg-white shadow-lg rounded-r-lg border border-l-0">
        {/* GitHub Link */}
        <Link
          href="https://github.com/AhmedOues93"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-all"
        >
          <IconBrandGithub size={28} />
        </Link>

        {/* LinkedIn Link */}
        <Link
          href="https://www.linkedin.com/in/ahmed-oues/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-all"
        >
          <IconBrandLinkedin size={28} />
        </Link>

        {/* Lebenslauf (CV) Download Link */}
        <Link
          href="/Lebenslauf_AhmedOueslati93.pdf"
          download
          title="Lebenslauf herunterladen (CV)"
          className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-all"
        >
          <IconFileDownload size={28} />
        </Link>
      </div>
    </div>
  );
}
