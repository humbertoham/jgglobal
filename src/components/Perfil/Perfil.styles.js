import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--blue);
  padding: 0px 75px 75px 75px;
  @media screen and (max-width: 720px) {
    padding: 0px 75px 75px 50px;
  }
`;

export const Content = styled.div`
  ::after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const Tittle = styled.div`
  margin: auto;
  padding-top: 25px;
  h1 {
    font-family: "Montserrat", sans-serif;
    text-align: center;
    font-size: var(--fontSuperBig);
    color: var(--white);
    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
      text-align: center;
    }
  }
`;
export const MapContainer = styled.div`
  padding: 25px;
  height: auto;
  width: 500px;
  margin: auto;
  @media screen and (max-width: 720px) {
    padding: 0;
    width: 300px;
    float: none;
  }
  p {
    text-align: center;
    color: var(--yellow);
    font-size: var(--fontSmall);
    flex-wrap: nowrap;
  }
`;
export const Map = styled.img`
  border-radius: 25%;
  display: block;
  height: auto;
  width: 100%;
  padding: 0 30px;
  margin: auto;
  @media screen and (max-width: 720px) {
    padding: 0;
  }
`;

export const Text = styled.div`
  float: left;
  width: 66.66666%;
  padding: 25px;
  max-width: 500px;
  animation: slide-top 1s;
  @keyframes slide-top {
    0% {
      -webkit-transform: translateY(100px);
      transform: translateY(100px);
    }
    100% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
    }
  }

  h1 {
    font-size: var(--fontSuperBig);
    color: var(--blue);
    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }
  p {
    color: var(--white);
    font-size: var(--fontMed);
    flex-wrap: nowrap;
    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }

  @media screen and (max-width: 720px) {
    padding: 25px 0px 0px 0px;
    width: auto;
    float: none;
  }
`;
