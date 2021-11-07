import React from "react";
import { Container, LogoIMG, Wrapper, Text } from "./Work.styles";

import acsa from "../../images/logo1.png";
import vit from "../../images/logo2.png";
const Work = () => {
  return (
    <Wrapper>
      <Container>
        <Text>
          <h1>Clientes</h1>
        </Text>
        <LogoIMG src={acsa} />
        <LogoIMG src={vit} />
      </Container>
    </Wrapper>
  );
};

export default Work;
