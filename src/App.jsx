import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && (
        <Loader
          onComplete={() => setIsLoading(false)}
        />
      )}

      <AppRoutes />
    </>
  );
}

export default App;