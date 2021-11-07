import React from "react";
import { Container, Text, Wrapper, Con } from "./Contact.styles";
import { faGoogle, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <Wrapper>
      <Container>
        <Text>
          <h1>Contáctanos</h1>
        </Text>
        <Con className="ptp">
          <h1>
            <FontAwesomeIcon className="google" size="2x" icon={faGoogle} />
            mail: ventas.jgglobal@gmail.com
          </h1>
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
            Ubicación: Calle Bugambilias #695, Jarachina norte, Reynosa,
            Tamaulipas.
          </h1>
        </Con>
      </Container>
    </Wrapper>
  );
};

export default Contact;
