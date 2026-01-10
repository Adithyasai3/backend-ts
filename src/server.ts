import express from "express";
console.log(">>> SERVER.TS WITH USERS/:ID LOADED <<<");

const app = express();
app.use(express.json());


type User = {
  id: number;
  name: string;
};

const users: User[] = [];
let nextId = 1;

app.get("/hello",(req,res)=>{
  res.json({status:"Hello"});
})




app.post("/users",(req,res)=>{
  const {name}= req.body;

  if(!name){
    return res.status(400).json({error:"Name is required"});
  }
  const user: User = {
  id:nextId++,
  name
};

users.push(user);
res.status(201).json(user);
});

app.get("/users",(req,res)=>{
  res.json(users);
});

app.get("/users/:id",(req,res)=>{
  const id = Number(req.params.id);
  const user = users.find(u =>u.id === id);
  if(!user){
    return res.status(404).json({error:"User not found"});
  }
  res.json(user);
});

app.put("/users/:userId", (req, res) => {
  const userId = Number(req.params.userId);
  const { name: updatedName } = req.body;

  if (!updatedName) {
    return res.status(400).json({ error: "Name is required" });
  }

  const existingUser = users.find(person => person.id === userId);

  if (!existingUser) {
    return res.status(404).json({ error: "User not found" });
  }

  existingUser.name = updatedName;

  res.json(existingUser);
});

app.delete("/users/:userId",(req,res)=>{
  const userId = Number(req.params.userId);
  if (Number.isNaN(userId)) {
    return res.status(400).json({ error: "Invalid user id" });
  }
   const existingUser = users.find(user => user.id === userId);

  if (!existingUser) {
    return res.status(404).json({ error: "User not found" });
  }

  users.splice(users.indexOf(existingUser), 1);
  res.status(204).send();
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
