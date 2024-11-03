import express from "express";
import cors from "cors"

const app = express();

app.use(cors({ origin: ["http://localhost:5173"] }))

const sampleEmployee = {
    name: {
      first: "Charlie",
      last: "Thompson",
    },
    email: "charlie.thompson@example.com",
    picture: {
      medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
    },
    name: {
      first: "Casper",
      last: "Ghost",
    },
    email: "Casper.ghost@example.com",
    picture: {
      medium: "https://ih1.redbubble.net/image.5393788777.3092/st,small,507x507-pad,600x600,f8f8f8.u5.jpg",
    },
  };

app.get("/api/employees", (req,res) => {
    res.json({ results: [sampleEmployee] });
});

const port = 3311;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});