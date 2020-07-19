import React from "react";
import { GAME_DESIGNS, GAME_DESIGNS_DATA, PERSONAL_DATA } from "./constants";

const renderImages = (imgDir, fileCount) => {
  // sadly globbing images with hardcorded fileCount constant
  const imgs = [];
  for (let i = 1; i <= fileCount; i++) {
    const imgPath = `${imgDir}/screenshot_${i}.png`;
    imgs.push(
      <div className="resume-content mx-auto mb-5">
        <img src={imgPath} height="300" />
      </div>
    );
  }
  return imgs;
};

const renderGameDesigns = () =>
  GAME_DESIGNS_DATA.map(({ name, imgDir, fileCount, url }) => {
    return [
      <div className="subheading mb-3" key={name}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </div>,
      <div
        className="resume-item d-flex flex-wrap flex-sm-row text-center"
        key={name}
      >
        {renderImages(imgDir, fileCount)}
      </div>,
    ];
  });

export const GameDesigns = () => (
  <section
    className="resume-section p-3 p-lg-5 d-flex flex-column"
    id="game-designs"
  >
    <div className="my-auto">
      <h2 className="mb-5">{GAME_DESIGNS}</h2>
      {renderGameDesigns()}
      <div className="subheading mb-3">
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
