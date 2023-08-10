import Link from "next/link";
import "./advancementCard.scss";
import { advancementElementType } from "./advancements";

export default function AdvancementCard({ element }: { element: advancementElementType }) {
	return (
		<div className="advancement__card">
			<article className="advancement__card--content">
				<div className="advancement__card--front">
					<h3>{element.title}</h3>
				</div>
				<div className="advancement__card--back">
					<header>
						<h3>{element.title}</h3>
					</header>
					<div className="separator" />
					<p className="description">{element.description}</p>
					<Link href={element.link} target="_blank" className="button">
						Learn more ...
					</Link>
				</div>
			</article>
		</div>
	);
}
