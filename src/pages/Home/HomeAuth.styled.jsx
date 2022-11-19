import styled from "styled-components";

import { Link } from "react-router-dom";


export const HomeWrapper = styled.div`
  padding-right:250px;
  padding-left:250px;
  padding-top:80px;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 54px);
  ${'' /* background-color: orange ; */}
`;

export const Wrapper = styled.div`
    margin-top: 50px;
    maxWidth:700px;
    margin: 0px auto;
    padding: 30px;
    border-radius: 5px;
    box-shadow: #2196f3 0px 0px 10px 5px;
    background-color: var(--color-bg);
`;

export const Title = styled.h1`
  width: 500px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  font-size: 40px;
  text-align: center;
  font-family:Roboto;
  @media screen and (max-width: 768px) {
    font-family:Roboto;
    margin-bottom: 10px;
    font-size: 30px;
  }
`;

export const Text = styled.p`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-size: 22px;
  line-height: 1.8;
  text-align: center;
  font-family:Roboto;
  @media screen and (max-width: 768px) {
    font-family:Roboto;
    font-size: 18px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: underline;
  color: #2196f3;
`;