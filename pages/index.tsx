import type { NextPage } from "next";
import Sidebar from "../components/Sidebar";
import Center from "../components/Center";

const Home: NextPage = () => {
  return (
    <div>
      <main className="flex bg-black h-screen overflow-hidden">
        <Sidebar />
        <Center />
      </main>
      <div>{/* Player */}</div>
    </div>
  );
};

export default Home;
