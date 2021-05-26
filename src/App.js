import React from "react"
import Layout from "./pages/layout/Layout"
import Main from "./pages/main/Main"
import Badge from "./components/Badge"

function App() {
  return (
    <React.Fragment>
    <Layout>
      <Badge profile_picture={"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}></Badge>
    </Layout>
    </React.Fragment>
  );
}

export default App;
