import mongoDB from "./Config/mongoDB.js";
import app from "./App.js";

mongoDB();
app.listen(process.env.PORT || 8000, () => console.log("Servidor Rodando!"));
