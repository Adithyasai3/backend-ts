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

app.get("/health",(req,res)=>{
  res.json({status:"OK"});
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

app.listen(3000, () => {
  console.log("Server running on port 3000");
});