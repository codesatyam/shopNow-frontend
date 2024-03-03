import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import HomePage from "./pages/HomePage";
import { Layout } from "./layout";

const routes = [
  {
    path: "/",
    component: HomePage,
    props: {}, // Optionally, you can pass props to the component
  },
  // Add more route objects as needed
];

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((element, index) => (
          <Route
            key={index}
            path={element.path}
            element={
              <Layout>
                <Suspense
                  fallback={
                    <div className="flex flex-col items-center justify-center mt-12">
                      {/* Render a loader component here if needed */}
                    </div>
                  }
                >
                  <element.component {...element.props} />
                </Suspense>
              </Layout>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
