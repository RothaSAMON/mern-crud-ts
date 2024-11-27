import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema";
import cors from "cors";
import { createConnection } from "typeorm";
import { Users } from "./Entities/Users";

const main = async () => {
  // await createConnection({
  //   type: "mysql",
  //   database: "GraphqlCRUD",
  //   username: "root",
  //   password: "smeryoung097",
  //   logging: true,
  //   synchronize: false,
  //   entities: [Users],
  // });

  try {
    await createConnection({
      type: "mysql",
      host: "mydb.cj0wqe4um5o5.ap-southeast-2.rds.amazonaws.com", // Endpoint from AWS RDS
      port: 3306, // Port from AWS RDS
      database: "GraphqlCRUD", // The confirmed database name
      username: "admin", // Your RDS username
      password: "smeryoung097$", // Your RDS password
      logging: true, // Enable logging for debugging
      synchronize: true, // Auto-sync tables (use only in development)
      entities: [Users], // Your entity files
    });

    console.log("Connected to RDS MySQL! 🚀");
  } catch (error) {
    console.error("Error connecting to RDS:", error);
  }

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(3001, () => {
    console.log("SERVER RUNNING ON PORT 3001");
  });
};

main().catch((err) => {
  console.log(err);
});
