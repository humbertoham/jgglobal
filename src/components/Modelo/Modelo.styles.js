import styled from "styled-components";
export const Wrapper = styled.div`
  background: var(--yellow);
`;
export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0;
  margin: 0px 24px 0 24px;

  width: 400px;
  z-index: 1;
`;
export const Text = styled.div`
  margin: auto;
  padding: 0 10px 0 10px;

  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: var(--fontBig);
    font-weight: 700;
    color: var(--black);
    text-align: left;
    @media screen and (max-width: 720px) {
      font-size: var(--fontMed);
    }
  }
  p {
    font-size: var(--fontMed);
    text-align: left;
    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
`;

export const CardHeader = styled.header`
  padding-top: 0px;
`;
export const CardHeading = styled.h1`
  font-family: "Montserrat", sans-serif;
  text-align: center;
  padding-left: 10px;
  color: var(--white);
  @media screen and (max-width: 720px) {
    font-size: var(--fontBig);
  }
`;

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 0px;
  }

  &:nth-last-of-type(2) {
    margin-top: 0px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

export const CardOptionsNote = styled.small`
  padding-top: 8px;
  display: block;
  width: 100%;
  font-size: var(--smallFont);
  text-align: center;
`;

export const Head = styled.div`
  margin: auto;
  padding: 10px;

  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: var(--fontSuperBig);
    font-weight: 700;
    color: var(--black);
    text-align: center;
    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }
`;

export const Block = styled.div`
  color: var(--white);
  height: 65px;
  padding: 10px;
  @media screen and (max-width: 720px) {
    height: 0;
  }
`;
