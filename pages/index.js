import { useEffect, useState } from "react";
import HomePage from "./home"

function Home({ }) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  return (
    <>
      <div className="body">
        <HomePage />
      </div>
    </>
  );
}
export default Home;
