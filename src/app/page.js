import Header from "./components/Header";
import IslandsContainer from "./components/IslandsContainer";
import islands from "./data/islands";

export default function Home() {
  return (
    <>
      <Header />
      <IslandsContainer islandsData={islands} />
    </>
  );
}
