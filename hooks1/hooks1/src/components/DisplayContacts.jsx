import React, { useContext } from 'react'
import ContactContext from '../context/ContactContext';



const DisplayContacts = () => {
    const { contacts, selectedContact, setSelectedContact } = useContext(ContactContext)
    

    const handleClick = (event) => {
        setSelectedContact({ name: "", phone:"" })
    }


    return (
        <div>
            <h1>Contacts</h1>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id} onClick={() => setSelectedContact(contact)}>
                        {contact.name}
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default DisplayContacts;