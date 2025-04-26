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
  const [count, setCount] = useState(0)

  function eatPizza(){
    setCount(count + 1);
  }

  return (
    <html lang="en">
      <head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Landing Page</title>
          <link rel='stylesheet' href="styles.css"/>
      </head>
      <body>
        {/*Container that holds all flexboxes/divs*/}
          <div className="container">
            <header>
                {/*Header is a flexbox that holds the logo and links*/}
                <div className="header">
                    <div id="header-image">
                        <img className='image-header' src={PizzaLogo} alt="Pizza"/>
                    </div>
                    {/*Link is a flexbox that holds the Google, YouTube, and Wikipedia links*/}
                    <div className="link">
                        <ul>
                          <li><a href="https://www.google.com" target="_blank">Google</a></li>
                          <li><a href="https://www.youtube.com/watch?v=_ZJ7AAoDhu4" target="_blank">YouTube</a></li>
                          <li><a href="https://en.wikipedia.org/wiki/Pizza" target="_blank">Wikipedia</a></li>
                        </ul>
                    </div>
                </div>
            </header>

            {/*Intro is a flexbox that holds the header, small paragraph, button with link, and pizza image*/}
            <div className="intro">
                {/*Another flexbox that holds specifically the header and paragraph*/}
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

            {/*Info is another flexbox that holds the various different pizzas*/}
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

        {/*Quote is another flexbox that holds the quote itself and its author*/}
        <div class="quote">
            <blockquote class="quote-info">Those that wait patiently for pizza receive the best of all.
                Which is homemade pizza.
            </blockquote>
            
            <div class="quote-name">
                -Mitchell McGaha
            </div>
        </div>

        {/*Ad is a flexbox that contains the ad-block flexbox, which then carries the ad-block-left flexbox*/}
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

        {/*Footer is the last flexbox that contains the "copyright" of The Odin Project*/}
        <div class="footer">
            <div class="footer-info">Copyright @ The Odin Project 2025</div>
        </div>

        </div>
      </body>
    </html>
  );
}

export default App;
