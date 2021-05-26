import React from "react"
import Layout from "./pages/layout/Layout"
import Main from "./pages/main/Main"

function App() {
  return (
    <React.Fragment>
    <Layout>
      <Main></Main>
    </Layout>
    </React.Fragment>
  );
}

export default App;
