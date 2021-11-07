import React, { useEffect } from "react";
import {
  Content,
  Wrapper,
  Tittle,
  Map,
  MapContainer,
  Text,
} from "./Perfil.styles";
import Aos from "aos";
import "aos/dist/aos.css";
import MapR from "../../images/map.jpeg";

const Perfil = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Content>
        <Tittle>
          <h1>Perfil de negocio</h1>
        </Tittle>
        <Text data-aos="fade-right">
          <p>• Maquiladoras </p>
          <p>• Parques industriales</p>
          <p>• Instituciones educativas</p>
          <p>• Centros comerciales</p>
          <p>• Cines</p>
          <p>• Hospitales</p>
          <p>• Bancos</p>
          <p>• Hoteles</p>
          <p>• Restaurantes</p>
          <p>• Industria petrolera</p>
          <p>• Oficinas</p>
        </Text>
        <MapContainer className="right" data-aos="fade-up">
          <Map src={MapR} />
          <p>Matriz</p>
          <p>Reynosa, Tamaulipas</p>
        </MapContainer>
      </Content>
    </Wrapper>
  );
};

export default Perfil;
