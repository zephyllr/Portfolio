import React from "react";
import { GAME_DESIGNS, GAME_DESIGNS_DATA, PERSONAL_DATA } from "./constants";

const renderImages = (img_dir, file_count) => {
  // sadly globbing images with hardcorded file_count constant
  const imgs = [];
  for (let i = 1; i <= file_count; i++) {
    const imgPath = `${img_dir}/screenshot_${i}.png`;
    imgs.push(
      <div class="resume-content mr-auto">
        <img class="mx-auto mb-2" src={imgPath} height="300" />
      </div>
    );
  }
  return imgs;
};

const renderGameDesigns = () =>
  GAME_DESIGNS_DATA.map(({ name, img_dir, file_count, url }) => {
    return [
      <div class="subheading mb-3" key={name}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </div>,
      <div class="resume-item d-flex flex-column flex-md-row mb-5" key={name}>
        {renderImages(img_dir, file_count)};
      </div>,
    ];
  });

export const GameDesigns = () => (
  <section
    class="resume-section p-3 p-lg-5 d-flex flex-column"
    id="game-designs"
  >
    <div class="my-auto">
      <h2 class="mb-5">{GAME_DESIGNS}</h2>
      {renderGameDesigns()}
      <div class="subheading mb-3">
        <a
          href={PERSONAL_DATA.weebly}
          target="_blank"
          rel="noopener noreferrer"
        >
          Other ArtWork @Weebly
        </a>
      </div>
    </div>
  </section>
);
