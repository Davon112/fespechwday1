import { createContext } from "react";


const ContactContext = createContext({
    contact: [],
    selectedContact: { name: '', phone: ''},
    setSelectedContact: () => {}
});
    



export default ContactContext;