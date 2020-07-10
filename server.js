const express = require("express");

const app = express();

app.get("/", (req,res)=>res.send("Hello WorldS"))


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on por ${PORT}`));
