import mongoose from "mongoose";

async function startDB() {
  const mongoUri =
    "mongodb+srv://" +
    `${encodeURI(process.env.MONGO_USER)}:` +
    `${encodeURI(process.env.MONGO_PASS)}@` +
    `${encodeURI(process.env.MONGO_SERVER)}/`;
  await mongoose.connect(mongoUri);
  console.log("DB conectado.");
}

export default startDB;

//mongodb://webdev:<db_password>@undefined/?replicaSet=atlas-kx14jp-shard-0&ssl=true&authSource=admin
