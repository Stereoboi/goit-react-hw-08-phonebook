import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, updateContact } from "./operations";

    const handlePending = state => {
      state.isLoading = true;
    };
    const handleRejected = (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    };

    const contactsSlice = createSlice({
    name: "contacts",
    initialState:{
      userContacts: [],
      isLoading: false,
      error: null,
      isEditing: false,
      currentContact: {},
    },
    reducers: {
      editContact(state, action) {
        state.isEditing = action.payload; 
      },
      cancelEditContact(state, action) {
        state.isEditing = action.payload; 
      },
      pickedContact(state, action) {
        state.currentContact = state.userContacts.filter(contact => contact.id === action.payload)
      },
    },
    extraReducers: {
    [fetchContacts.pending]:handlePending,
    [addContact.pending]:handlePending,
    [deleteContact.pending]:handlePending,
    [fetchContacts.rejected]:handleRejected,
    [addContact.rejected]:handleRejected,
    [deleteContact.rejected]:handleRejected,
    
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.userContacts = action.payload;
    },
    
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.userContacts.push(action.payload);
    },
    
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.userContacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.userContacts.splice(index, 1);
    },
    
    [updateContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.userContacts = state.userContacts.map(contact =>
        contact.id === action.payload.id ? action.payload : contact )
    },
  }, 
})

export const {
  editContact, cancelEditContact, pickedContact, implementChanges
} = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
