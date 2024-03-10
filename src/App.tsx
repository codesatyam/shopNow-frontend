import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import HomePage from "./pages/HomePage";
import { Layout } from "./layout";
import { Toaster } from 'react-hot-toast';
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

const routes = [
  {
    path: "/",
    component: HomePage,
    props: {}, 
  },
  {
    path: "/login",
    component: LoginPage,
    props: {},  
  },
  {
    path: "/signup",
    component: SignUpPage,
    props: {},  
  }
   
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
      <Toaster/>
    </Router>
  );
}

export default App;
