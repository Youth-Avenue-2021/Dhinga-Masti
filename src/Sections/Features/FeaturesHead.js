import React from "react";
import Card from "./Card";
// import Polygon from "../../Assets/Polygon.png";

const FeaturesHead = () => {
  const cards = [
    {
      title: "Strengthen reflex action",
      color: "purpleColor",
      icon: "fa-brands fa-artstation",
      desc: "Playing games can strengthen the act of reacting towards a situation which is very helpful for dealing with the problems.",
    },
    {
      title: "Problem solving",
      color: "orangeColor",
      icon: "fa-solid fa-people-carry-box",
      desc: "Many games create an environment to solve increasingly complicated problems which improves decision making skills.",
    },
    {
      title: "Sharpen mathematic calculations",
      color: "cyanColor",
      icon: "fa-solid fa-square-root-variable",
      desc: "Who would will to study for hours when one can learn calculations at the finger-tips while playing for minutes?",
    },
    {
      title: "Creativity",
      color: "redPink",
      icon: "fa-solid fa-rainbow",
      desc: "Playing games helps to think out of the box to solve any problem in real-life.",
    },
    {
      title: "Exploring the vocabulary",
      color: "greenColor",
      icon: "fa-solid fa-square-poll-vertical",
      desc: "Word games helps a child to enhance the vocabulary while playing.",
    },
  ];
  return (
    <>
      <section className="relative w-full">
        <h1 className="pt-24 text-center">Features</h1>
        <div className="container flex flex-wrap items-center justify-center px-16 pt-10 mx-auto">
          {cards.map((card, index) => (
            <Card title={card.title} icon={card.icon} color={card.color} key={index} index={index} desc={card.desc}></Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default FeaturesHead;
