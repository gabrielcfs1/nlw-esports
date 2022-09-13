import express from "express";

const app = express();
const PORT = 3333;

//localhost:3333/ads
app.get("/ads", (req, res) => {
  return res.json([
    { id: 1, name: "Anuncio 1" },
    { id: 2, name: "Anuncio 2" },
    { id: 3, name: "Anuncio 3" },
    { id: 4, name: "Anuncio 4" },
    { id: 5, name: "Anuncio 5" },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
