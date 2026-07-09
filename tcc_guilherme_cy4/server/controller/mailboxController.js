const Mailbox = require("../models/Mailbox");

async function createMailbox(req, res) {
  try {
    const { name, type, pricedollar } = req.body;

    const newMailbox = new Mailbox({
      name,
      type,
      pricedollar,
    });

    const savedMailbox = await newMailbox.save();
    res.status(201).json(savedMailbox);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function listMailbox(req, res) {
  try {
    const mailboxs = await Mailbox.find();
    res.status(200).json(mailboxs);

  } catch (error) {
    res.status(500).json({ error: "Erro ao listar Produtos" });
  }
}

async function updateMailbox(req, res) {
 try {
   const updated = await Mailbox.findByIdAndUpdate(req.params.id, req.body, {
     new: true,
   });
   res.json(updated);
 } catch (err) {
   res.status(400).json({ erro: err.message });
 }
}

async function deleteMailbox(req, res) {
 try {
   await Mailbox.findByIdAndDelete(req.params.id);
   res.json({ mensagem: "Produto deletado com sucesso." });
 } catch (err) {
   res.status(400).json({ erro: err.message });
 }
}

module.exports = { createMailbox, listMailbox, updateMailbox, deleteMailbox };

/*const Mailbox = require("../models/Mailbox");


async function createMailbox(req, res) {
 try {
   const { name, type, pricedollar } = req.body;


   const newMailbox = new Mailbox({
     name,
     type,
     pricedollar,
   });


   const savedMailbox = await newMailbox.save();
   res.status(201).json(savedMailbox);
 } catch (error) {
  
   res.status(400).json({ message: error.message });
 }

 async function listMailbox(req, res) {
        try {
            const mailboxs = await Mailbox.find();
            res.status(200).json(mailboxs);
        } catch (error) {
            res.status(500).json({ error: "Erro ao listar Mailboxs" });
        }
        }
    }

module.exports = { createMailbox, listMailbox };*/