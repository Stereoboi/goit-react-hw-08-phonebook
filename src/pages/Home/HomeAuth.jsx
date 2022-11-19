import { HomeWrapper, Title, Text, StyledLink, Wrapper } from "./HomeAuth.styled";
import { useAuth } from "hooks";

export default function HomeAuth ()  {
  const { user } = useAuth();
  
  return (
    <HomeWrapper>
      <Wrapper>
        <Title>Welcome to the Phonebook! { user.name }</Title>
          <Text>
            In this app, you can store and manage your contacts.
            To get started, you need to click {"\u00A0"}
            <StyledLink to="/contacts">Contacts</StyledLink>
          </Text>
      </Wrapper>
    </HomeWrapper>
  );
}