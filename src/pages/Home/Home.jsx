import { HomeWrapper, Title, Text, StyledLink, Wrapper } from "./Home.styled";
import { useAuth } from "hooks";

export const Home = () => {
  const { user } = useAuth();
  
  return (
    <HomeWrapper>
      <Wrapper>
        <Title>Welcome to the Phonebook!</Title>
          <Text>
            In this app, you can store and manage your contacts.
            To get started, you need to {"\u00A0"}
            <StyledLink to="/register">create an account</StyledLink>
            {"\u00A0"} or {"\u00A0"}
            <StyledLink to="/login">log in</StyledLink>
            {"\u00A0"}  
            if you already have one.
            {"\u00A0"}
          </Text>
      </Wrapper>
    </HomeWrapper>
  );
}