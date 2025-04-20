import React from "react";

export default function ArticleWrapper({ children, gamesInLibrary = null }) {
  return (
    <section className="max-width-wrapper">
      <header className="library-header">
        <h1>My games</h1>
        {gamesInLibrary && (
          <p>
            <span className="num-of-games">{gamesInLibrary}</span> games in
            library
          </p>
        )}
      </header>
      <div className="game-grid">{children}</div>
    </section>
  );
}
