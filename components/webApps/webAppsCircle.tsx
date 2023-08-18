import Icon from "@mdi/react";
import { webAppElementType } from "./webApps";
import "./webAppsCircle.scss";

export default function WebAppsCircle({
	element,
	setIsVisible,
}: {
	element: webAppElementType;
	setIsVisible: (id: number) => void;
}) {
	return (
		<li
			className="circle"
			key={element.id}
			style={{ "--accent-color": `${element.color}` } as React.CSSProperties}
			onClick={() => {
				setIsVisible(element.id);
			}}
		>
			<p className="circle__icon">
				<Icon path={element.icon} size={2} />
			</p>
			<span className="circle__description">{element.description}</span>
		</li>
	);
}
