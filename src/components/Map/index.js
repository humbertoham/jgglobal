import React from "react";
import { Container, Wrapper } from "./Map.styles";

const Map = () => {
  return (
    <Wrapper>
      <Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.3402928631754!2d-98.31338538497305!3d26.055132983504414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866505899b5ccad1%3A0xf24dd2608853962e!2sSierra%20Vallejo%20453%2C%20Las%20Fuentes%20Coloniales%2C%2088703%20Reynosa%2C%20Tamps.!5e0!3m2!1sen!2smx!4v1639765609532!5m2!1sen!2smx"
          width="100%"
          height="400"
        ></iframe>
      </Container>
    </Wrapper>
  );
};

export default Map;
