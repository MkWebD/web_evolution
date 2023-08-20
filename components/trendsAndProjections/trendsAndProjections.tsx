"use client";
import { useState } from "react";
import trendsAndProjectionDataElements from "../../data/currentAndFuturetrendsData.json";
import "./trendsAndProjections.scss";

export type trendsAndProjectionElementType = {
	id: number;
	title: string;
	current: string;
	future: string;
	image: string;
};

export default function TrendsAndProjections() {
	const [isCurrentTrend, setIsCurrentTrend] = useState(true);

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
				<p className="webApps__header--info">
					Hover or touch each cell to discover the current trend and click again to discover future projections
				</p>
			</header>
			<div className="trends__content honeycomb">
				{trendsAndProjectionDataElements.map((element) => {
					return (
						<li className="honeycomb-cell" key={element.id}>
							<img className="honeycomb-cell__image" src={element.image} alt={element.title} />
							<div className="honeycomb-cell__title">{element.title}</div>
							<div className="honeycomb-cell__descriptionCurrent">
								<div
									className="honeycomb-cell__descriptionCurrent--content subtitle"
									onClick={() => setIsCurrentTrend(!isCurrentTrend)}
								>
									<div>{isCurrentTrend ? "Current Trend:" : "Future Projection:"}</div>
									{isCurrentTrend ? element.current : element.future}
								</div>
							</div>
						</li>
					);
				})}
				<li className="honeycomb-cell honeycomb__placeholder"></li>
			</div>
		</section>
	);
}
