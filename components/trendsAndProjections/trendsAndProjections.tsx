import trendsAndProjectionDataElements from "../../data/currentAndFuturetrendsData.json";
import "./trendsAndProjections.scss";

export type trendsAndProjectionElementType = {
	id: number;
	title: string;
	current: string;
	future: string;
};

export default function TrendsAndProjections() {
	return (
		<section className="trends">
			<header className="trends__header">
				<h2 className="title">Current Trends and Future Projections in Web Development</h2>
				<p className="subtitle">
					The field of web development is dynamic, continuously evolving to meet changing user expectations,
					technological advancements, and emerging trends. Understanding current trends and projecting future
					developments is essential for staying ahead in this rapidly evolving landscape. Let&apos;s explore some of the
					current trends and future projections in web development
				</p>
				<div className="separator" />
			</header>
			<div className="trends__content">
				{trendsAndProjectionDataElements.map((element) => {
					return <div key={element.id}>TEST</div>;
				})}
			</div>
		</section>
	);
}
