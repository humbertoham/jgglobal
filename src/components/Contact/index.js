import React from "react";
import { Container, Text, Wrapper, Con } from "./Contact.styles";
import { faGoogle, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <Wrapper>
      <Container>
        <Text>
          <h1>Contáctanos</h1>
        </Text>
        <Con className="ptp">
          <h1>
            <FontAwesomeIcon className="google" size="2x" icon={faEnvelope} />
            Emails:
          </h1>
          <h1>contacto@jgglobal.mx</h1>
          <h1>ventas.jgglobal.mx</h1>
        </Con>
        <Con>
          <h1>
            <FontAwesomeIcon className="whats" size="2x" icon={faWhatsapp} />{" "}
            8991031833
          </h1>
        </Con>
        <Con className="pt">
          <h1>
            <FontAwesomeIcon className="pin" size="2x" icon={faMapMarkerAlt} />{" "}
            Ubicación: Sierra Vallejo #453 E/ Circuito Independencia, Fracc.
            Fuentes Coloniales, Reynosa, Tamaulipas.
          </h1>
        </Con>
      </Container>
    </Wrapper>
  );
};

export default Contact;
