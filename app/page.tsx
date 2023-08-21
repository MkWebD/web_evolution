import Advancements from "@/components/advancements/advancements";
import BackToTopButton from "@/components/backToTopButton/backToTopButton";
import Conclusion from "@/components/conclusion/conclusion";
import LandingSection from "@/components/landingSection/landingSection";
import Timeline from "@/components/timeline/timeline";
import TrendsAndProjections from "@/components/trendsAndProjections/trendsAndProjections";
import WebApps from "@/components/webApps/webApps";

export default function Home() {
	return (
		<main>
			<LandingSection />
			<Timeline />
			<Advancements />
			<WebApps />
			<TrendsAndProjections />
			<Conclusion />
			<BackToTopButton />
		</main>
	);
}
