import Image from "next/image";
import { timelineElementType } from "../timeline/timeline";
import "./timelineCard.scss";

export default function TimelineCard({ element }: { element: timelineElementType }) {
	return (
		<div className="card">
			<time className="card__date">{element.date}</time>
			<header className="card__title">{element.title}</header>
			<Image src={element.image} width={100} height={100} className="card__image" alt="/" />
			<section className="card__description">{element.description}</section>
		</div>
	);
}
