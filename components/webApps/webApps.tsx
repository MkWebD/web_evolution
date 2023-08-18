"use client";
import { useEffect, useState } from "react";
import { webAppDataElements } from "../../data/webAppsData";
import "./webApps.scss";
import WebAppsCircle from "./webAppsCircle";
import WebAppsOverlay from "./webAppsOverlay";
import WebAppsSvgSplitter from "./webAppsSvgSplitter";

export type webAppElementType = {
	id: number;
	icon: string;
	description: string;
	color: string;
	text: string;
};

export default function WebApps() {
	useEffect(() => {
		const handleScroll = () => {
			const circleElements = document.querySelectorAll<HTMLElement>(".circle");
			const circleHeight = circleElements[0].offsetHeight;

			circleElements.forEach((circle, index) => {
				const rect = circle.getBoundingClientRect();

				if (rect.bottom <= window.innerHeight) {
					let fillPercentage;

					if (index === circleElements.length - 1) {
						// For the last circle
						const scrolledPastCircle = window.innerHeight - rect.bottom;
						fillPercentage = (scrolledPastCircle / circleHeight) * 100;
					} else {
						const nextCircle = circleElements[index + 1];
						const nextRect = nextCircle.getBoundingClientRect();

						// Calculate how much of the next circle is visible
						const visibleHeightOfNext = window.innerHeight - nextRect.top;
						fillPercentage = (visibleHeightOfNext / circleHeight) * 100;
					}

					circle.style.setProperty("--clipY2", `${fillPercentage}%`);
				} else {
					circle.style.setProperty("--clipY2", `0%`); // Reset the filling if the circle is above the viewport
				}
			});
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const [isVisible, setIsVisible] = useState(false);
	const [selectedElement, setSelectedElement] = useState<webAppElementType | null>(null);

	const toggleVisibility = (id: number) => {
		selectedElement === null && id !== 0 ? setSelectedElement(webAppDataElements[id - 1]) : setSelectedElement(null);
		setIsVisible(!isVisible);
	};

	return (
		<section className="webApps">
			<header className="webApps__header">
				<WebAppsSvgSplitter />
				<h2 className="title">Emergence of Web Applications</h2>
				<p className="subtitle">
					The evolution of the web saw a transformative shift from static web pages to dynamic and interactive web
					applications. The emergence of web applications marked a turning point in how users engaged with online
					content and services. Here, we explore the milestones that led to the rise of web applications:
				</p>
				<div className="separator" />
				<p className="webApps__header--info">Click on each element to see more informations</p>
			</header>
			<div className="webApps__content">
				<ul className="circles">
					{webAppDataElements.map((element) => {
						return (
							<div className="circle__wrapper" key={element.id}>
								<WebAppsOverlay visibility={isVisible} element={selectedElement} setIsVisible={toggleVisibility} />
								<WebAppsCircle element={element} setIsVisible={toggleVisibility} />
							</div>
						);
					})}
				</ul>
			</div>
		</section>
	);
}
