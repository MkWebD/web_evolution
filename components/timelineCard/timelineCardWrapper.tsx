"use client";
import { useIntersectionObserver } from "@/utils/utils";
import { useRef, useState } from "react";
import { timelineElementType } from "../timeline/timeline";
import TimelineCard from "./timelineCard";
import "./timelineCardWrapper.scss";

export default function TimelineCardWrapper({ element }: { element: timelineElementType }) {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const reference = useRef<HTMLLIElement>(null);

	useIntersectionObserver<HTMLLIElement>(reference, false, setIsIntersecting);

	return (
		<li className={`timeline__body--line ${isIntersecting ? "in-view" : ""}`} ref={reference}>
			<TimelineCard element={element} />
		</li>
	);
}
