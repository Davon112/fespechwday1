import { useState } from 'react'
import './App.css'
import ContactContext from './context/ContactContext';
import DisplayContacts from './components/DisplayContacts';
import DisplaySelectedContact from './components/DisplaySelectedContact';

function App() {
  const allContacts = [
    { id: 1, name: 'Mike Jones', phone: '281-330-8004' },
    { id: 2, name: 'Soulja Boy', phone: '678-999-8212' },
    { id: 3, name: 'Morgan Wallen', phone: '865-409-1021' }
];
  const [contacts] = useState(allContacts)
  const [selectedContact, setSelectedContact] = useState({ name: '', phone: ''});



  return (
    <ContactContext.Provider value={{ contacts, selectedContact, setSelectedContact }}>
      <DisplayContacts />
      <DisplaySelectedContact />
    </ContactContext.Provider>
  )
}

export default App