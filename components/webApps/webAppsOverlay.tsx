import { webAppElementType } from "./webApps";
import "./webAppsOverlay.scss";

export default function WebAppsOverlay({
	element,
	visibility,
	setIsVisible,
}: {
	element: webAppElementType | null;
	visibility: boolean;
	setIsVisible: (id: number) => void;
}) {
	return (
		<div
			className="overlay"
			style={{ visibility: `${visibility ? "visible" : "hidden"}`, left: `${visibility ? "0" : "100%"}` }}
			onClick={() => setIsVisible(0)}
		>
			<article className="overlay__card">
				<header className="overlay__card--header title">
					{element?.description}
					<div className="separator" />
				</header>
				<section className="overlay__card--content subtitle">
					<p>{element?.text}</p>
				</section>
				<button className="button">Close popup</button>
			</article>
		</div>
	);
}
