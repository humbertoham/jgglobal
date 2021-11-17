import React, { useEffect } from "react";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  Text,
  Head,
  Block,
  Wrapper,
} from "./Modelo.styles";

import Aos from "aos";
import "aos/dist/aos.css";
const Model = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Wrapper>
      <Head>
        <h1>Modelo de contratación</h1>
      </Head>
      <div className="container">
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <CardHeading>Orden de servicio</CardHeading>
            <Text>
              <h1>1. Definiciones de perfiles</h1>
              <h1>2. Descripción de actividades</h1>
              <h1>3. Selección de personal</h1>
              <h1>4. Contratación</h1>
            </Text>
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-right">
          <CardHeader>
            <Block></Block>
            <Text>
              <h1>
                Los requerimientos de nuestros Clientes son primero, quienes
                definen los perfiles adecuados para la cobertura de cada punto
                de control.
              </h1>
            </Text>
          </CardHeader>
        </CardWrapper>
      </div>
    </Wrapper>
  );
};

export default Model;
