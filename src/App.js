import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import { Body } from "./components/Body";
import Main from "./Main";

const appRouter = createBrowserRouter([
  {
    path:"/",
    element :<Body/>,
    children : [
      {
        path : "/",
        element: <Main/>
      },
      {
        path:"/login",
        element: <Login/>
      },
    ]
  }
])


function App() {
  return (
    <div>
    <Header/>
    <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
