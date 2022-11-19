import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  display: inline-block;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  text-decoration: none;
  padding: 12px;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  color: white;
  &.active {
    color: #212F3C ;
  }
`
