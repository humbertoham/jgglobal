import React, { useEffect } from "react";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  Text,
  Box,
} from "./Capacitacion.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  faKey,
  faLifeRing,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
const Cap = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Text>
        <h1>Capacitación y adiestramiento</h1>
      </Text>
      <div className="container">
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <CardHeading>Sección A</CardHeading>
            <Text>
              <p> 1. Los 4 anillos de seguridad.</p>
              <p> 2. Prevención y combate de incendios teórico y práctico.</p>
              <p> 3. Respuestas a planes de emergencias </p>
              <p>4. Control y prevención en el manejo de explosivos</p>
              <p> 5. Manejo e investigación de accidentes </p>
              <p>6. Primeros auxilios</p>
            </Text>
            <Box>
              <FontAwesomeIcon className="ad" size="10x" icon={faLifeRing} />{" "}
            </Box>
          </CardHeader>
        </CardWrapper>
        <CardWrapper>
          <CardHeader data-aos="fade-up">
            <CardHeading>Sección B</CardHeading>
            <Text>
              <p> 1. Control de llaves</p>
              <p> 2. Actuación ante intrusión </p>
              <p>3. Actuación en caso de robo </p>
              <p>4. Actuación en caso de bomba </p>
              <p>5. Actuación en caso de bultos sospechosos </p>
              <p>6. Actuación contra terrorismo postal </p>
              <p>7. Actuación en caso de disturbios </p>
              <p>8. Actuación en simulacros</p>
            </Text>
            <Box>
              <FontAwesomeIcon className="ad" size="10x" icon={faKey} />{" "}
            </Box>
          </CardHeader>
        </CardWrapper>
        <CardWrapper>
          <CardHeader data-aos="fade-up">
            <CardHeading>Sección C</CardHeading>
            <Text>
              <p> 1. Tratamiento y archivo de la documentación</p>{" "}
              <p>2. Uso de bebidas alcohólicas y droga </p>
              <p>
                3. Actuación en caso de posesión y portación de armas blancas
                y/o de fuego{" "}
              </p>
              <p>
                4. Actuación, prevención y prohibición en hostigamiento sexual,
                la violencia, agresión o delitos sexuales.{" "}
              </p>
              <p>
                5. Actuación en la recopilación y divulgación de estadísticas de
                incidencia delictiva{" "}
              </p>
              <p>
                {" "}
                6. Actuación en caso de activación de alarmas contra incendio
              </p>
            </Text>
            <Box>
              <FontAwesomeIcon className="ad" size="10x" icon={faShieldAlt} />{" "}
            </Box>
          </CardHeader>
        </CardWrapper>
      </div>
    </div>
  );
};

export default Cap;
