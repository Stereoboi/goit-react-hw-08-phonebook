import { useSelector } from "react-redux";
import { ContactListItem } from "components/ContListItem/ContactListItems";
import { selectVisibleContacts } from "redux/contacts/selectors";
import { List } from "./ContactList.styled"



export const ContactList = () => {

  const contacts = useSelector(selectVisibleContacts);


  return (
      <List >  
        {contacts.map(contact => (
          <ContactListItem
          contact={contact}  
          key={contact.id}
        />
        ))}
    </List>
    )
}