import React from 'react';
import { Container } from '@material-ui/core';

const Home = () => {
  return (
    <div id="home-outer-container">
      <Container id="home-container">
        <h1 id="home-heading">Welcome to Pixel Vault Games!</h1>
        <img
          id="games-in-case"
          src="../assets/gamesInCase.jpeg"
          alt="Store display case with NES games"
        />
        <p id="home-first-block-text">
          We buy, sell, and trade everything from the Magnavox Odyssey to the
          Xbox Series X. Bring in your old games and find a &quot;new&quot;
          favorite.
        </p>
        <img
          id="consoles-and-controllers"
          src="../assets/consolesAndControllers.jpeg"
          alt="Store display case with boxed consoles and controllers"
        />
        <p id="home-second-block-text">
          Have a dead console or a controller with stick drift? We can fix
          almost anything!
        </p>
        <img
          id="home-store-display"
          src="../assets/storeDisplay2.jpeg"
          alt="In-store display depicting scene with Mario, Link, and other video game characters"
        />
        <p id="home-third-block-text">
          Pixel Vault Games has been the Inland Empire&apos;s favorite spot for
          all things retro games since 2005 (verify this). We are a family owned
          and family friendly shop that strives to make you feel welcome,
          comfortable, and nostalgiac for the good old days.
        </p>
      </Container>
    </div>
  );
};

export default Home;
