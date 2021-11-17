import React, { useEffect } from "react";
import { Wrapper, Content, Text, Boss, Second, Third } from "./Estruc.styles";
import Aos from "aos";
import "aos/dist/aos.css";
const Estruc = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Content>
        <Text data-aos="fade-up">
          <h1>Estructura organizaciónal</h1>
        </Text>
        <Boss data-aos="fade-right">
          <h1>Dirección</h1>
        </Boss>
        <Second data-aos="fade-right">
          <h1>Asuntos juridicos</h1>
        </Second>
        <Second data-aos="fade-right">
          <h1>Calidad</h1>
          <Third>
            <h1>Auditores</h1>
          </Third>
        </Second>
        <Second data-aos="fade-right">
          <h1>Finanzas</h1>
          <Third>
            <h1>Compras</h1>
          </Third>
        </Second>
        <Second data-aos="fade-right">
          <h1>Recursos humanos</h1>
          <Third>
            <h1>Reclutamiento y selección</h1>
          </Third>
          <Third>
            <h1>Capacitación</h1>
          </Third>
        </Second>
        <Second data-aos="fade-right">
          <h1>Operaciones</h1>
          <Third>
            <h1>Supervisión</h1>
          </Third>
          <Third>
            <h1>Lider de turno</h1>
          </Third>
          <Third>
            <h1>Oficiales de seguridad</h1>
          </Third>
        </Second>
      </Content>
    </Wrapper>
  );
};

export default Estruc;
