import type { NextPage } from "next";
import Layout from "../components/Layout";
import { GlobalVariableProvider } from "../context/GlobalVaribales";

const Home: NextPage = () => {
  return (
    <>
      <GlobalVariableProvider>
        <Layout />
      </GlobalVariableProvider>
    </>
  );
};

export default Home;
