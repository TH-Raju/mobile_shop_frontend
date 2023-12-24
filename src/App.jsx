import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";

const App = () => {
  return (
    <div className="max-w-[80%] md:w-[100%] mx-auto">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
