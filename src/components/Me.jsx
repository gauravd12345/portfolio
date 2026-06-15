import React from 'react';
import { Film, ExternalLink } from 'lucide-react';
import { meLinks } from '../data/portfolioData';

export default function Me() {
  return (
    <section id="me" className="min-h-[calc(100vh-5rem)] px-6 py-14">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-violet-500" />
            <div className="font-mono text-xs uppercase tracking-widest text-violet-700">
              Me
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Off the clock</h2>
          <p className="text-gray-600 mt-3 text-base max-w-2xl leading-relaxed">
            Not everything lives on a résumé. A few things I like to do when I&apos;m not coding or
            in the lab.
          </p>
        </div>

        <div className="rounded-2xl border border-violet-200 bg-violet-50/40 p-6 md:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex gap-4 min-w-0">
              <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-violet-200 text-violet-700">
                <Film size={22} aria-hidden />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-900 text-lg">Movies</h3>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  I keep a running list of favorites on Letterboxd. Same taste not guaranteed.
                </p>
              </div>
            </div>
            <a
              href={meLinks.letterboxdFavorites}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 shrink-0 font-mono text-sm px-4 py-2.5 rounded-xl border border-violet-300 bg-white text-violet-800 hover:bg-violet-50 hover:border-violet-400 transition-colors sm:self-center"
            >
              <span>My favorite movies</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
