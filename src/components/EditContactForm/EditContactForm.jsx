import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { useFormik } from 'formik';
import * as yup from 'yup'
import { ContactList } from 'components/ContactList/ContactList';
import  Filter  from 'components/Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { selectEditing, selectCurrentContact } from 'redux/contacts/selectors';
import { cancelEditContact } from 'redux/contacts/contactsSlice';
import { updateContact } from 'redux/contacts/operations';

export default function EditContactForm() {

  const dispatch = useDispatch();

  const cancelEditing = useSelector(selectEditing);
  
  const pickedContact = useSelector(selectCurrentContact);

    const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().min(6).required(),
  })
  
  const formik = useFormik({
     initialValues: {
       name: '',
       number: '',
     },
     validationSchema: schema,
     onSubmit: (values, { resetForm }) => {
      const editedValue = { ...values, id: pickedContact[0].id}
 
      dispatch(updateContact(editedValue))
      dispatch(cancelEditContact(!cancelEditing))
      resetForm();
     },
   });
   
  const handleCancelEdit = () => dispatch(cancelEditContact(!cancelEditing))  

  return (
    
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AddIcCallIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit Contact
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              type="text"
              name="name"
              defaultValue={pickedContact[0].name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="number"
              label="Number"
              type="text"
              defaultValue={pickedContact[0].number}
              onChange={formik.handleChange}
              error={formik.touched.number && Boolean(formik.errors.number)}
              helperText={formik.touched.number && formik.errors.number}
              id="number"
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Accept edit
            </Button>
            <Button
              onClick={handleCancelEdit}
              type="button"
              variant="contained"
              sx={{ mt: 3, mb: 2, ml:19 }}
            >
              Cancel edit
            </Button>
          </Box>
            <Filter/>
            <ContactList/>   
        </Box>
      </Container>
  );
}