import React from "react";
import "./App.css";
import View from "./routes/View";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const query = new QueryClient();
const App = () => {
  return (
    <>
      <QueryClientProvider client={query}>
        <View />
      </QueryClientProvider>
    </>
  );
};

export default App;
