import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Form = styled.form`
  width: 320px;
`
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`

export const StyledLink = styled(NavLink)`
    text-decoration: underline;
    color: #2196f3;
`