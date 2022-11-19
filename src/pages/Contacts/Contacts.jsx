import EditContactForm from 'components/EditContactForm/EditContactForm';
import AddContactForm from 'components/AddContactForm/AddContactForm';
import { useSelector } from 'react-redux';
import { selectEditing } from 'redux/contacts/selectors';

export default function Contacts() {

  const editing = useSelector(selectEditing);

  return (
    <div>
      {!editing ? (<AddContactForm/>) : (<EditContactForm/>)}
    </div>
  );
}