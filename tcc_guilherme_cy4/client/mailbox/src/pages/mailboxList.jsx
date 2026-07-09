import { useQuery } from '@tanstack/react-query';
import { listMailbox } from '../../services/mailboxService';


export default function MailboxList() {
 const { data, isLoading, error } = useQuery({
   queryKey: ['mailbox'],
   queryFn: listMailbox,
 });


 if (isLoading) return <p>Carregando...</p>;
 if (error) return <p>Erro ao carregar produtos</p>;


 return (
   <div>
     <h1>Lista de Produtos</h1>
     <ul>
       {data.map((mailbox) => (
         <li key={mailbox._id}>
           {mailbox.name} - Preço em Dólar {mailbox.pricedollar} ({mailbox.type.join(', ')})
         </li>
       ))}
     </ul>
   </div>
 );
}