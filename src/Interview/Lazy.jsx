import { lazy, Suspense, useState } from "react";

// Lazy load components
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <h2>Code Splitting Example</h2>

      <button onClick={() => setPage("home")}>
        Home
      </button>

      <button onClick={() => setPage("about")}>
        About
      </button>

      {/* Show fallback while component is loading */}
      <Suspense fallback={<h3>Loading...</h3>}>
        {page === "home" ? <Home /> : <About />}
      </Suspense>
    </div>
  );
}

export default App;