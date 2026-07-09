import { BrowserRouter, Routes, Route } from 'react-router-dom';
import mailboxList from './pages/mailboxList';
import MailboxForm from "./components/mailboxForm";



export default function App() {
 return (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<MailboxFormList />} />
       <Route path="/mailbox" element={<MailboxForm />} />
     </Routes>
   </BrowserRouter>
 );
}