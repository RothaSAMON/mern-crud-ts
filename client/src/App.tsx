import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./App.css";
import CreateUser from "./Components/CreateUser";
import ListOfUsers from "./Components/ListOfUsers";
import UpdatePassword from "./Components/UpdatePassword";
import Note from "./Components/Note";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <ApolloProvider client={client}>
        <div className="container max-w-[1000px] mx-auto flex flex-col gap-[20px] p-4">
          <Note />
          <CreateUser />
          <UpdatePassword />
          <ListOfUsers />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
