import express, { urlencoded } from "express";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req.url);
  res.sendFile(path.join(__dirname, "public", "HTML", "home.html"));
});
app.post("/signin", (req, res) => {
  console.log(req.url);
  const { Name, email, password } = req.body;
  console.log(Name);
  console.log(email);
  res.sendFile(path.join(__dirname, "public", "HTML", "signin.html"));
});
app.listen(3000);
