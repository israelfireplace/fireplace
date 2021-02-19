import React from "react";
import { Container } from "react-bootstrap";
import Box from "../../Components/Box/Box";
import BoxSlider from "../../Components/Box/BoxSlider";
import "./Landing.scss";

import fireplace1 from "../../images/fireplace1lg.jpg";
import fireplace2 from "../../images/fireplace2lg.jpg";
import fireplace3 from "../../images/fireplace3lg.jpg";

const sliderHeader = "קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום.";
const sliderText =
  "גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמימגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.";

const boxesArray = [
  {
    image: fireplace3,
    header: "קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום.",
    text:
      "גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמימגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.",
    buttonText: "לגלריה",
    buttonLink: "/gallery",
  },
  {
    image: fireplace2,
    header: "קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום.",
    text:
      "גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמימגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.",
    buttonText: "לגלריה",
    buttonLink: "/gallery",
  },
  {
    image: fireplace1,
    header: "קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום.",
    text:
      "גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמימגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.",
    buttonText: "לגלריה",
    buttonLink: "/gallery",
  },
  {
    image: fireplace2,
    header: "קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום.",
    text:
      "גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמימגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.",
    buttonText: "לגלריה",
    buttonLink: "/gallery",
  },
];

const Landing = () => {
  return (
    <Container fluid={true}>
      <BoxSlider header={sliderHeader} text={sliderText} />
      {boxesArray.map((item, index) => {
        return (
          <Box
            withMask={true}
            shadow={"0.4"}
            image={item.image}
            header={item.header}
            text={item.text}
            buttonLink={item.buttonLink}
            buttonText={item.buttonText}
            side={index % 2 === 0 ? "left" : "right"}
            key={Math.random()}
          />
        );
      })}
    </Container>
  );
};

export default Landing;
