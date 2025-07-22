import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "./pages/homePage/HomePage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <NotFoundPage />,
		children: [{ index: true, element: <HomePage /> }],
	},
	{
		path: "*",
		element: <NotFoundPage />,
	},
]);
export default router;
