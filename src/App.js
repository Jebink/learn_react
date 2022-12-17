import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

let imagePath = "../images/";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {data.map((cardDetails) => {
        let {
          id,
          title,
          description,
          price,
          coverImg,
          stats,
          location,
          openSpots,
        } = cardDetails;
        return (
          <Card
            img={imagePath + coverImg}
            rating={stats.rating}
            reviewCount={6}
            country="USA"
            title="Life Lessons with Katie Zaferes"
            price={136}
          />
        );
      })}
    </div>
  );
}
export default App;
