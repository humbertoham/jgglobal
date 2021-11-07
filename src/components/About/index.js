import React, { useEffect } from "react";
import { Content, Wrapper, Text, Box } from "./About.styles";
import Aos from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper id="about">
      <Content data-aos="fade-right">
        <Text>
          <h1>¿Quiénes somos?</h1>
          <p>
            Somos una empresa dedicada al desarrollo e implementación de
            sistemas efectivos de Seguridad en control y prevención rentables
            para los sectores industrial, comercial y turístico.
          </p>
          <p>• Excelencia en el servicio</p>
          <p>• Servicio personalizado</p>
          <p>• Cumplimiento de objetivos</p>
          <p>• Trabajo en equipo</p>
          <p>• Comunicación efectiva</p>
        </Text>
      </Content>
      <Content data-aos="fade-right">
        <Text className="right">
          <h1>Misión</h1>
          <p>
            Liderar la industria de la seguridad Privada mediante servicios de
            alta calidad con personal altamente capacitados en prevención,
            protección y vigilancia en 5 años.
          </p>
        </Text>
      </Content>
      <Content data-aos="fade-right">
        <Text className="right">
          <h1>Valores</h1>
          <p>1. Altos principios éticos</p>
          <p>2. Integridad, dedicación</p>
          <p>3. Responsabilidad</p>
          <p>4. Honestidad</p>
          <p>5. Disciplina</p>
          <p>6. Lealtad</p>
        </Text>
      </Content>
      <Content data-aos="fade-right">
        <Text className="right">
          <h1>Visión</h1>
          <p>
            Atraer innovación y confianza para los cliente y nuestra gente a
            través de programas eficaces de protección a nivel internacional.
          </p>
        </Text>
      </Content>
      <Content data-aos="fade-right">
        <Text>
          <h1>Servicios de calidad</h1>
          <p>
            Desarrollamos para cada cliente un Sistema de Gestión de la
            Seguridad exclusivo con fundamento en las normas nacionales e
            internacionales.
          </p>
          <p>Protección:</p>
          <p>• Control de acceso</p>
          <p>• Rondines preventivos</p>
          <p>• Prevención de perdidas</p>
          <p>• Protección contra incendio</p>
          <p>• CCTV </p>
          <p>• C-TPAT</p>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default About;