import { useEffect, useState } from "react";

function Home({}) {
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
        <div>test
        </div>
      </div>
    </>
  );
}
export default Home;
