import React from 'react';

function Headers() {
  return (
    <section>
      <header>
        <h1 data-testid="header1" className="header1">
          What's the Weather like Today?
        </h1>
        <p data-testid="header2" className="header2">
          Look up your city...
        </p>
      </header>
    </section>
  );
}

export default Headers;
