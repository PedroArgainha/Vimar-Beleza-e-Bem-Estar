"use client";

import React, { useMemo } from "react";

type ImageType = { src: string; alt: string };

type Props = {
  topImages: ImageType[];
  bottomImages: ImageType[];
  className?: string;
};

export default function InfiniteGallery({ topImages, bottomImages, className }: Props) {
  const topLoop = useMemo(() => [...topImages, ...topImages, ...topImages], [topImages]);
  const bottomLoop = useMemo(() => [...bottomImages, ...bottomImages, ...bottomImages], [bottomImages]);

  const cardW = 288;
  const gap = 24;
  const step = cardW + gap;
  const bottomOffset = step / 2;

  const topDuration = topImages.length * 4;
  const bottomDuration = bottomImages.length * 4;

  const css = `
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

  return (
    <div className={className ?? ""}>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="gallery-wrapper select-none">
        {/* Linha de cima */}
        <div className="overflow-hidden mb-6">
          <div className="gallery-track-top flex gap-6 w-max">
            {topLoop.map((image, idx) => (
              <div key={`top-${idx}`} className="flex-shrink-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-72 h-48 object-cover rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Linha de baixo — offset de meio card */}
        <div className="overflow-hidden">
          <div className="gallery-track-bottom flex gap-6 w-max">
            {bottomLoop.map((image, idx) => (
              <div key={`bot-${idx}`} className="flex-shrink-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-72 h-48 object-cover rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  loading="lazy"
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