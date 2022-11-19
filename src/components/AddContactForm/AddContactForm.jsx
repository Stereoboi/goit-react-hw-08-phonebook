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
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contacts/operations.js";
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations.js';
import { selectContacts } from 'redux/contacts/selectors';
import * as yup from 'yup'
import { ContactList } from 'components/ContactList/ContactList';
import  Filter  from 'components/Filter/Filter';
import { Notification, Toast } from 'components/Notification/Notification';

export default function AddContactForm() {

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
       if (contacts.some(el => el.name.toLowerCase() === values.name.toLowerCase())) {
        Notification();
        return
      }
      dispatch(addContact(values))
      resetForm();
     },
   });

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
            Add Contact
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
              value={formik.values.name}
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
              value={formik.values.number}
              onChange={formik.handleChange}
              error={formik.touched.number && Boolean(formik.errors.number)}
              helperText={formik.touched.number && formik.errors.number}
              id="number"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add contact
            </Button>
          </Box>
            <Filter/>
            <ContactList/>
            <Toast/>
        </Box>
      </Container>
  );
}