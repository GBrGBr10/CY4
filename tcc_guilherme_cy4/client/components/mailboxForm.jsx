import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";

import { createMailbox, getMailbox, updateMailbox    } from "../../services/mailboxService";


export default function MailboxForm() {
 //const { register, handleSubmit, reset } = useForm();
    const { register, handleSubmit, reset, setValue } = useForm();
    const { id } = useParams();
    const navigate = useNavigate();


 const { mutate: create } = useMutation({
   mutationFn: createMailbox,
   onSuccess: () => {
     alert("Produto cadastrado com sucesso!");
     reset();
     navigate("/");
   },
   onError: () => {
     alert("Erro ao cadastrar Produto");
   },
 });

 const { mutate: update } = useMutation({
    mutationFn: ({id, data}) => updateMailbox(id, data),
    onSuccess: () => {
    alert("Produto editado com sucesso!");
    reset();
    navigate("/");

    },
  onError: () => {
    alert("Erro ao editar Produto");
  },
});

/* function onSubmit(data) {
   create(data);
 }*/

function onSubmit(data) {
  if (id) {
    update({id, data});
  } else {
    create(data);
  }
}

const { data } = useQuery({
  queryKey: ["mailbox", id],
  queryFn: () => getMailbox(id),
  enabled: !!id
});

useEffect(() => {
  if (data) {
    setValue("name", data.name);
    setValue("type", data.type.join(", "));
    setValue("level", data.level);
      }
    }, [data, setValue]);

 return (
   <form
     onSubmit={handleSubmit(onSubmit)}
     className="flex flex-col gap-4 max-w-md"
   >
     <input placeholder="Nome" {...register("name")} />
     <input placeholder="Tipo" {...register("type")} />
     <input type="number" placeholder="Nível" {...register("level")} />
     <button type="submit">Cadastrar</button>
   </form>
 );
}
