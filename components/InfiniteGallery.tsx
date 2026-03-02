"use client";

import React, { useMemo } from "react";

type ImageType = { src: string; alt: string };

type Props = {
  topImages: ImageType[];
  bottomImages: ImageType[];
  className?: string;
};

export default function InfiniteGallery({ topImages, bottomImages, className }: Props) {
  const topLoop = useMemo(() => [...topImages, ...topImages], [topImages]);
  const bottomLoop = useMemo(() => [...bottomImages, ...bottomImages], [bottomImages]);

  const cardW = 288;
  const gap = 24;
  const step = cardW + gap;
  const bottomOffset = step / 2;

  const topDuration = topImages.length * 4;
  const bottomDuration = bottomImages.length * 4;

  const css = `
    @keyframes nudge {
      0%   { transform: translateY(-50%) translateX(0);   opacity: 1;   }
      50%  { transform: translateY(-50%) translateX(5px); opacity: 0.6; }
      100% { transform: translateY(-50%) translateX(0);   opacity: 1;   }
    }
    .arrow-nudge {
      animation: nudge 1.8s ease-in-out infinite;
    }

    @keyframes infinite-left-top {
      0%   { transform: translateX(0); }
      100% { transform: translateX(${-(step * topImages.length)}px); }
    }
    @keyframes infinite-left-bottom {
      0%   { transform: translateX(${-bottomOffset}px); }
      100% { transform: translateX(${-(bottomOffset + step * bottomImages.length)}px); }
    }
    .gallery-track-top {
      animation: infinite-left-top ${topDuration}s linear infinite;
    }
    .gallery-track-bottom {
      animation: infinite-left-bottom ${bottomDuration}s linear infinite;
    }
    .gallery-wrapper:hover .gallery-track-top,
    .gallery-wrapper:hover .gallery-track-bottom {
      animation-play-state: paused;
    }
  `;

  const ArrowHint = () => (
  <div className="absolute top-1/2 left-3 z-10 pointer-events-none arrow-nudge">
    <div className="bg-black/40 backdrop-blur-sm rounded-full w-9 h-9 flex items-center justify-center">
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </div>
  );

  return (
    <div className={className ?? ""}>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="gallery-wrapper select-none">
        {/* Linha de cima */}
        <div className="overflow-hidden mb-6 relative">
          <ArrowHint />
          <div className="gallery-track-top flex gap-6 w-max">
            {topLoop.map((image, idx) => (
              <div key={`top-${idx}`} className="flex-shrink-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-72 h-48 object-cover rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  loading="eager"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Linha de baixo — offset de meio card */}
        <div className="overflow-hidden relative">
          <ArrowHint />
          <div className="gallery-track-bottom flex gap-6 w-max">
            {bottomLoop.map((image, idx) => (
              <div key={`bot-${idx}`} className="flex-shrink-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-72 h-48 object-cover rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  loading="eager"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}