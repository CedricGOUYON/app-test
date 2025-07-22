import { useNavigate } from "react-router";

function NotFoundPage() {
	const navigate = useNavigate();

	return (
		<div>
			<h1>404 - Page non trouvée</h1>
			<button type="button" onClick={() => navigate("/")}>
				Retour à l'accueil
			</button>
		</div>
	);
}

export default NotFoundPage;
