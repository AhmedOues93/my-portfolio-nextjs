import Link from "next/link";
import { IconBrandGithub, IconWorld } from "@tabler/icons-react";

export default function ProjectCard({
  title,
  description,
  tech = [],
  githubUrl,
  liveUrl,
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
      <div className="h-48 w-full bg-gray-100 flex items-center justify-center text-gray-400">
        Image placeholder
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
          {tech.map((item) => (
            <span
              key={item}
              className="bg-slate-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>

        <p className="text-gray-700 text-base flex-grow mb-4">{description}</p>

        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100">
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <IconBrandGithub size={18} />
            Code
          </Link>

          {liveUrl && (
            <Link
              href={liveUrl.startsWith("http") ? liveUrl : `https://${liveUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <IconWorld size={18} />
              Live
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
