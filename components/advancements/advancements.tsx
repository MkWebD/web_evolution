import elements from "../../data/advancementsData.json";
import AdvancementCard from "./advancementCard";
import "./advancements.scss";
export type advancementElementType = {
	id: number;
	title: string;
	description: string;
	link: string;
};

export default function Advancements() {
	return (
		<main className="advancements">
			<header>
				<h2 className="advancements__title">Technological Advancements:</h2>
				<p className="subtitle subtitle__padding">
					The evolution of the web has been closely tied to significant technological advancements that have shaped its
					capabilities and functionalities. These breakthroughs have not only expanded the possibilities for web
					developers but have also transformed how users interact with the internet. Let&apos;s explore some of the key
					technological milestones:
				</p>
			</header>
			<div className="separator" />
			<section className="advancements__wrapper">
				{elements.map((element) => {
					return <AdvancementCard key={element.id} element={element} />;
				})}
			</section>
		</main>
	);
}
