import React, { useEffect } from "react";
import {
  Content,
  Wrapper,
  Text,
  Box,
  Map,
  MapContainer,
} from "./Ventasf.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MapR from "../../images/trabajadores.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { faBroom, faCamera, faCar } from "@fortawesome/free-solid-svg-icons";
const Ventasf = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper id="about">
      <Content data-aos="fade-right">
        <Text>
          <h1>Ventas y servicios digitales</h1>
          <p>
            Somos una empresa dedicada al desarrollo e implementación efectivos
            rentables para los sectores industrial, comercial y turístico.
          </p>
          <p>• Excelencia en el servicio</p>
          <p>• Servicio personalizado</p>
          <p>• Cumplimiento de objetivos</p>
          <p>• Trabajo en equipo</p>
          <p>• Comunicación efectiva</p>
        </Text>
        <MapContainer className="right" data-aos="fade-up">
          <Map src={MapR} />
        </MapContainer>
      </Content>

      <Content data-aos="fade-right">
        <Text>
          <h1>Servicios de mensajería y traslados</h1>
          <p>Servicios de mensajería en: </p>
          <p>• Banco</p>
          <p>• IMSS</p>
          <p>• Fiscal etc </p>
          <p>• Traslado de ejecutivos dentro y fuera de la CD</p>
        </Text>
        <Box>
          {" "}
          <FontAwesomeIcon className="ab" size="10x" icon={faCar} />{" "}
        </Box>
      </Content>
      <Content data-aos="fade-right">
        <Box className="dp">
          {" "}
          <FontAwesomeIcon className="ab" size="10x" icon={faCamera} />{" "}
        </Box>
        <Text className="right">
          <h1>Venta e instalación de equipo</h1>
          <p>• Venta e instalación de equipo de C.C.Tv.</p>{" "}
          <p>• Video porteros </p>
          <p>• Relojes checadores digitales </p>
          <p>• Chapas Electromagnéticas</p>
        </Text>
        <Box className="db">
          {" "}
          <FontAwesomeIcon className="ab" size="10x" icon={faCamera} />{" "}
        </Box>
      </Content>
      <Content data-aos="fade-right">
        <Text className="right">
          <h1>Servicios</h1>
          <p>Servicios de:</p>
          <p>• Limpieza</p>
          <p>• Herreria</p>
          <p>• Mallas perimetrales</p>
          <p>• Jardinería</p>
          <p>• Plomería</p>
          <p>• Pintor</p>
          <p>• Papelería en general</p>{" "}
          <p>• Venta de equipo de seguridad industrial</p>
          <p>• Mantenimiento preventivo de aires acondicionados</p>
        </Text>
        <Box>
          {" "}
          <FontAwesomeIcon className="ab" size="10x" icon={faBroom} />{" "}
        </Box>
      </Content>
    </Wrapper>
  );
};

export default Ventasf;
