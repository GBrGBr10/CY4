import axios from "axios";


export async function listMailbox() {
 const { data } = await axios.get("http://localhost:8000/api/mailbox");
 return data;
}

export async function createMailbox(body) {
 const { data } = await axios.post("http://localhost:8000/api/mailbox", body);
 return data;
}

export async function getMailbox(id) {
 const { data } = await axios.get(`http://localhost:8000/api/mailbox/${id}`);
 return data;
}


export async function updateMailbox(id, body) {
 const { data } = await axios.patch(`http://localhost:8000/api/mailbox/${id}`, body);
 return data;
}