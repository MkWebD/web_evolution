import Advancements from "@/components/advancements/advancements";
import LandingSection from "@/components/landingSection/landingSection";
import Timeline from "@/components/timeline/timeline";
import WebApps from "@/components/webApps/webApps";

export default function Home() {
	return (
		<main>
			<LandingSection />
			<Timeline />
			<Advancements />
			<WebApps />
		</main>
	);
}
