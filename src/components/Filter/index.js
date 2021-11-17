import React, { useEffect } from "react";
import { Content, Wrapper, Text, Box } from "./Filter.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";
import "aos/dist/aos.css";
import { faClinicMedical, faRunning } from "@fortawesome/free-solid-svg-icons";
const Filter = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper id="about">
      <Content data-aos="fade-right">
        <Text>
          <h1>Filtro de contratación de personal</h1>
          <p>• Examen médico </p>
          <p>
            • Examen toxicológico realizado por laboratorio certificado
          </p>{" "}
          <p>• Carta de NO antecedentes penales</p> <p>• Perfil psicológico </p>
          <p>
            • Contamos con certificado como empresa libre de adicciones
          </p>{" "}
          <p>• Realización de estudio socio económico</p>
        </Text>
        <Box>
          {" "}
          <FontAwesomeIcon
            className="ab"
            size="10x"
            icon={faClinicMedical}
          />{" "}
        </Box>
      </Content>
      <Content data-aos="fade-right">
        <Text>
          <h1>Entrenamiento</h1>
          <p>Capacitación al personal de nuevo ingreso:</p>{" "}
          <p>1. Inducción formación básica del oficial</p>{" "}
          <p>2. Inducción Control de accesos </p>
          <p>3. Atención al cliente </p>
          <p>4. Inducción Rondín </p>
          <p>5. Manual de Procedimientos de la empresa </p>
          <p>6. Inducción a CT-PAT </p>
          <p>7. Inducción seguridad física </p>
          <p>8. Inducción ¿Qué es Seguridad? </p>
          <p>9. Inducción Derechos Humanos </p>
          <p>10.Inducción RP Y RNP</p>
        </Text>
        <Box>
          {" "}
          <FontAwesomeIcon className="ab" size="10x" icon={faRunning} />{" "}
        </Box>
      </Content>
    </Wrapper>
  );
};

export default Filter;
