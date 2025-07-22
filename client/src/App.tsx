import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<>
			<Outlet />
			<ToastContainer position="bottom-right" />
		</>
	);
}

export default App;
