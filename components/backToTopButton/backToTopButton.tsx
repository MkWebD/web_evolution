"use client";
import { mdiArrowUpCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect, useState } from "react";
import "./backToTopButton.scss";

export default function BackToTopButton() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className={`back-to-top-button ${isVisible ? "visible" : ""}`}>
			<button className="button" onClick={scrollToTop}>
				<Icon className="button__icon" path={mdiArrowUpCircleOutline} size={1} />
				<span>Back to Top</span>
			</button>
		</div>
	);
}
