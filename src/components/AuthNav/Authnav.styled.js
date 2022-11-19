import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  font-size: 1rem;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  &.active {
    color: #2196f3;
  }
`
export const WrapperHome = styled.div`
  
`
export const WrapperAuth = styled.div`
  margin-left: auto;
`

export const Navbar = styled.div`
  
  border-bottom: 1px solid #2196f3;
  padding-right: 15px;
  padding-left: 15px;
  display:flex;
`