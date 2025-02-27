import React, { useState } from 'react';
import './styles.css';


function App() {
  return (
    <html lang="en">
      <head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Landing Page</title>
          <link rel='stylesheet' href="styles.css"/>
      </head>
      <body>
          <div className="container">
            <header>
                <div className="header">
                    <div id="header-image">
                        <img src="photos/Pizza.svg" alt="Pizza"/>
                    </div>

                    <div className="link">
                        <ul>
                          <li><a href="https://www.google.com" target="_blank">Google</a></li>
                          <li><a href="https://www.youtube.com/watch?v=_ZJ7AAoDhu4" target="_blank">YouTube</a></li>
                          <li><a href="https://en.wikipedia.org/wiki/Pizza" target="_blank">Wikipedia</a></li>
                        </ul>
                    </div>
                </div>
            </header>
          </div>
      </body>
    </html>
  );
}

export default App;
