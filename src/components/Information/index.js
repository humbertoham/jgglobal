import React, { useEffect } from "react";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  Text,
} from "./Information.styles";

import Aos from "aos";
import "aos/dist/aos.css";
const Information = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Text>
        <h1>Nuestras funciones</h1>
      </Text>
      <div className="container">
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <CardHeading>Manual de operaciones</CardHeading>
            <Text>
              <p>
                Cada Cliente requiere de un manual de operaciones exclusivo, el
                cual debe satisfacer totalmente las necesidades reales de la
                seguridad, por lo que desarrollamos analíticamente un esquema
                basado en los conceptos elementales de la protección
                empresarial:
              </p>
              <p>• Seguridad física</p>
              <p>• Control de acceso</p>
              <p>• Seguridad de procedimientos</p>
              <p>• Seguridad del personal</p>
              <p>• Educación y entrenamiento</p>
              <p>• Manifiestos de carga</p>
              <p>• Seguridad en la transportación</p>
            </Text>
          </CardHeader>
        </CardWrapper>
        <CardWrapper>
          <CardHeader data-aos="fade-up">
            <CardHeading>Análisis de riesgo</CardHeading>
            <Text>
              <p>• Gestión del riesgo</p>
              <p>• Análisis de Vulnerabilidades </p>
              <p>• Atlas de riesgo</p>
            </Text>
          </CardHeader>
          <CardHeader className="last" data-aos="fade-up">
            <CardHeading>Supervisión operativa</CardHeading>
            <Text>
              <p>
                Contamos con un sistema de monitoreo y supervisión efectiva 24/7
                los 365 días del año mismo que le garantiza y da certeza y
                tranquilidad a nuestros clientes que su personal y bienes
                inmuebles están salvaguardados.
              </p>
            </Text>
          </CardHeader>
        </CardWrapper>
      </div>
    </div>
  );
};

export default Information;
