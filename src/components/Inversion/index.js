import React from "react";
import { Wrapper, Content, Text, Map, MapContainer } from "./Inversion.styles";
import MapR from "../../images/propuesta.jpeg";
const Inv = () => {
  return (
    <Wrapper>
      <Content>
        <Text>
          <h1>Propuesta de inversión: </h1>
        </Text>
        <MapContainer>
          <Map src={MapR} />
        </MapContainer>
      </Content>
    </Wrapper>
  );
};

export default Inv;
