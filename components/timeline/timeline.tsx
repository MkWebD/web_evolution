"use client";
export type timelineElementType = {
	id: number;
	date: string;
	title: string;
	description: string;
	image: string;
	color: string;
};
import elements from "../../data/cardData.json";
import TimelineCardWrapper from "../timelineCard/timelineCardWrapper";
import "./timeline.scss";

export default function Timeline() {
	return (
		<section className="timeline">
			<h1 className="title">Historical timeline of Web development</h1>
			<h2 className="subtitle">Key milestones from the birth of Arpanet in 1969</h2>
			<div className="separator" />
			<ul className="timeline__body">
				{elements.map((element) => {
					return <TimelineCardWrapper key={element.id} element={element} />;
				})}
			</ul>
		</section>
	);
}
