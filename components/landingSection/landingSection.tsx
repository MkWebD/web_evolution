import SvgLogo from "../svgLogo/svgLogo";
import "./landingSection.scss";

export default function LandingSection() {
	return (
		<section className="landing">
			<SvgLogo />
			<div className="landing__body">
				<p>
					We will explore key milestones and technological advancements that shaped the internet. Discover its evolution
					through significant events and innovations.
				</p>

				<p>
					This infographic provides a concise overview of major achievements, breakthroughs, and milestones in internet
					history. From its early beginnings to the global network we rely on today.
				</p>

				<p>
					Explore events like the invention of the World Wide Web, social media platforms, internet speed advancements,
					and other essential technological developments.
				</p>

				<p>
					Overall, it&#39;s an educational tool to help people understand the journey to the modern internet landscape.
				</p>
			</div>
		</section>
	);
}
