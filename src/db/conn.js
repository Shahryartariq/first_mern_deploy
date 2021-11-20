const mongoose = require("mongoose");
//console.log(process.env.DATABASE);

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"))
  .catch((error) => console.log(error));

// DATABASE=mongodb+srv://shehryar:Pakistan123@cluster0.f7prn.mongodb.net/mernstack?retryWrites=true&w=majority
