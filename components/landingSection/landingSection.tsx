import SvgLogo from "../svgLogo/svgLogo";
import "./landingSection.scss";

export default function LandingSection() {
	return (
		<section className="landing">
			<SvgLogo />
			<div className="landing__body">
				<p>
					<span className="bigLetter">W</span>e will explore key milestones and technological advancements that shaped
					the internet. Discover its evolution through significant events and innovations.
				</p>

				<p>
					<span className="bigLetter">T</span>his infographic provides a concise overview of major achievements,
					breakthroughs, and milestones in internet history. From its early beginnings to the global network we rely on
					today.
				</p>

				<p>
					<span className="bigLetter">E</span>xplore events like the invention of the World Wide Web, social media
					platforms, internet speed advancements, and other essential technological developments.
				</p>

				<p>
					<span className="bigLetter">O</span>verall, it&#39;s an educational tool to help people understand the journey
					to the modern internet landscape.
				</p>
			</div>
		</section>
	);
}
