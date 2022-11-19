import PropTypes from 'prop-types';
import { Button, ListItem,TextWrapper,ButtonWrapper } from './ContactListItems.styled';
import { useDispatch,useSelector } from "react-redux";
import { deleteContact} from 'redux/contacts/operations';
import { editContact, pickedContact } from 'redux/contacts/contactsSlice';
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import { selectEditing } from 'redux/contacts/selectors';

export const ContactListItem = ({ contact }) => {
  const editing = useSelector(selectEditing)

  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  const handleEdit = (e) => {
    dispatch(editContact(!editing))
    dispatch(pickedContact(e.currentTarget.id))
  }

  return (
    <ListItem >
    <ButtonWrapper>
      <TextWrapper>
        <span>{contact.name}:</span><span>{contact.number}</span>
      </TextWrapper>
      <Button       
      type="button"
      onClick={handleDelete}
      >
      <PersonRemoveOutlinedIcon size="20" />
      </Button>

      <Button
      id = {contact.id}
      type="button"
      onClick={handleEdit}
      >
      <ModeOutlinedIcon size="20" />
      </Button>
    </ButtonWrapper>
  </ListItem>
  )
}


ContactListItem.propTypes = {
  contact: PropTypes.object,
}
  





