const express = require("express");


const mailboxController = require("../controllers/mailboxController");


const router = express.Router();


router.post("/mailbox", mailboxController.createMailbox );
router.get("/mailbox", mailboxController.listMailbox );
router.patch("/mailbox/:id", mailboxController.updateMailbox );
router.delete("/pokemon/:id", mailboxController.deleteMailbox );


module.exports = router;