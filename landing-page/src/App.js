import React, { useState } from 'react';
import './styles.css';
import "typeface-roboto"
import PizzaLogo from './photos/Pizza.svg';
import PizzaIntro from './photos/PizzaIntro.jpg';
import CheesePizza from './photos/CheesePizza.jpeg';
import PepperoniPizza from './photos/PepperoniPizza.jpg';
import VeggiePizza from './photos/VeggiePizza.jpg';
import HawaiianPizza from './photos/HawaiianPizza.jpg';

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
                        <img src={PizzaLogo} alt="Pizza"/>
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
            <div className="intro">
                <div className="intro-left">
                  <h1 className="intro-left-header">Welcome to Mitchell's Pizza Landing Page!</h1>
                  <p className="intro-left-paragraph">
                    This is my landing page that I created within the Odin Project's curriculum. <br></br>
                    Pizza is my favorite food of all time! <br></br>
                    There are infinite combinations and tastes to explore!
                  </p>
                  <a className="hideaway-link" href="https://www.hideawaypizza.com/" target="_blank">
                    <button className="button">Order Pizza!</button>
                  </a>
                </div>

                <img id="intro-pizza" src={PizzaIntro} alt="Pizza"></img>
            </div>

            <h1 className="info-header">Pizzas</h1>

            <div class="info">
            <div class="info-item">
                <img class="info-image" src={CheesePizza} alt="Cheese Pizza"></img>
                <div class="text">Cheese Pizza: Plain cheese pizza with no extra toppings, simple but tasty.</div>
            </div>
            <div class="info-item">
                <img class="info-image" src={PepperoniPizza} alt="Pepperoni Pizza"></img>
                <div class="text">Pepperoni Pizza: Classic pepperoni pizza that will put a smile on your face.</div>
            </div>
            <div class="info-item">
                <img class="info-image" src={VeggiePizza} alt="Veggie Pizza"></img>
                <div class="text">Veggie Pizza: An all vegetable pizza for the herbivores.</div>
            </div>
            <div class="info-item">
                <img class="info-image" src={HawaiianPizza} alt="Hawaiian Pizza"></img>
                <div class="text">Hawaiian Pizza: A sweet and salty pizza with ham and pineapple.</div>
            </div>
        </div>

        <div class="quote">
            <blockquote class="quote-info">Those that wait patiently for pizza receive the best of all.
                Which is homemade pizza.
            </blockquote>
            
            <div class="quote-name">
                -Mitchell McGaha
            </div>
        </div>

        <div class="ad">
            <div class="ad-block">
                <div class="ad-block-left">
                    <h3>Want More Pizza?</h3>
                    <p>Click the button to the right to find pizza recipes!</p>
                </div>
                <a href="https://www.simplyrecipes.com/search?q=Pizza" target="_blank">
                    <button class="button">Recipes</button>
                </a>
            </div>
        </div>

        <div class="footer">
            <div class="footer-info">Copyright @ The Odin Project 2025</div>
        </div>

        </div>
      </body>
    </html>
  );
}

export default App;
