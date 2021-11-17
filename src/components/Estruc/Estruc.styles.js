import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--yellow);
`;

export const Content = styled.div`
  padding: 25px;
`;

export const Text = styled.div`
  padding: 25px;

  h1 {
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-size: var(--fontSuperBig);
    color: var(--blue);
    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }
  p {
    color: var(--white);
    font-size: var(--fontBig);
    flex-wrap: nowrap;
    @media screen and (max-width: 720px) {
      font-size: var(--fontMed);
    }
  }

  @media screen and (max-width: 720px) {
    padding: 25px 0px 0px 0px;
    width: auto;
    float: none;
  }
`;
export const Boss = styled.div`
  border-radius: 25px;
  margin: 25px auto;
  width: 300px;
  background: var(--black);
  padding: 25px;
  h1 {
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-size: var(--fontBig);
    color: var(--white);
    @media screen and (max-width: 720px) {
      font-size: var(--fontMed);
    }
  }
  @media screen and (max-width: 720px) {
    width: 200px;
  }
`;
export const Second = styled.div`
  margin: 25px auto;
  border-radius: 25px;
  width: 600px;
  background: var(--blue);
  padding: 25px;
  h1 {
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-size: var(--fontBig);
    color: var(--white);
    @media screen and (max-width: 720px) {
      font-size: var(--fontMed);
    }
  }
  @media screen and (max-width: 720px) {
    width: auto;
  }
`;
export const Third = styled.div`
  border-radius: 25px;
  margin: 25px auto;
  width: 300px;
  background: var(--white);
  padding: 25px;
  h1 {
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-size: var(--fontBig);
    color: var(--blue);
    @media screen and (max-width: 720px) {
      font-size: var(--fontMed);
    }
  }
  @media screen and (max-width: 720px) {
    width: 200px;
  }
`;
