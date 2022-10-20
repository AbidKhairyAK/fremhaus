import Scrollbar from "smooth-scrollbar";
import InvertDeltaPlugin from "$lib/utils/InvertDeltaPlugin.js";

export default function initSmoothScroll() {
	const scrollContainer = document.querySelector('[smooth-scroll]')

	Scrollbar.use(InvertDeltaPlugin)
	Scrollbar.init(scrollContainer, {
		alwaysShowTracks: true,
		plugins: {
			invertDelta: {
				events: ["wheel"],
			},
		},
	})
}