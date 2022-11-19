import styled from "styled-components";

export const TextWrapper = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0px auto;
    padding: 10px 5px;
    border-bottom: 1px solid grey;

    & span {
    display: inline-flex;
    align-items: center;
    font-weight: 600;
    font-size: 20px;

    &:first-of-type {
      margin-right: 10px;
    }
    
  }
`

export const ListItem = styled.li`
    
`;

export const Button = styled.button`

  display: block;
  margin-left: auto;
  padding: 10px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  transition: all 250ms ease-in-out;
  &:hover {
    color: red ;
    transform: scale(1.3);
  }
`;