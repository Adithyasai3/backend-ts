import express from "express";

const app = express();
app.use(express.json());

type User = {
  id: number;
  name: string;
};

const users: User[] = [];
let nextId = 1;

app.post("/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  const user = {
    id: nextId++,
    name
  };

  users.push(user);

  res.status(201).json(user);
});

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

app.get("/health",(req, res)=>{
    res.json({status:"OK",server: "running" })
});

app.get("/users", (req, res) => {
  res.json(users);
});
