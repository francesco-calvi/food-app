import type { NextPage } from "next";
import MainContent from "../components/main-content/MainContent";
import App from "../components/App";

const Home: NextPage = () => {
  return (
    <App>
      <MainContent />
    </App>
  );
};

export default Home;
