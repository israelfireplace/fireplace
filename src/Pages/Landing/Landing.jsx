import React from "react";
import { Container } from "react-bootstrap";
import Box from "../../Components/Box/Box";
import BoxSlider from "../../Components/Box/BoxSlider";
import "./Landing.scss";


import mainPageSections from '../../mainPageSections'

const sliderHeader = "קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום.";
const sliderText =
  "גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמימגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.";



const Landing = () => {
  return (
    <Container fluid={true}>
      <BoxSlider header={sliderHeader} text={sliderText} />
      {mainPageSections.map((item, index) => {
        return (
          <Box
            withMask={true}
            shadow={"0.4"}
            image={item.image}
            header={item.title}
            text={item.body}
            buttonLink={"/gallery"}
            buttonText={"לגלריה"}
            side={index % 2 === 0 ? "left" : "right"}
            key={item.id}
          />
        );
      })}
    </Container>
  );
};

export default Landing;
