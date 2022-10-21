import Scrollbar from "smooth-scrollbar";
import CustomScrollPlugin from "$lib/utils/CustomScrollPlugin.js";

export default function initSmoothScroll(isHorizontal = false) {
	const scrollContainer = document.querySelector('[smooth-scroll]')
	let options = {
		alwaysShowTracks: true
	}

	Scrollbar.use(CustomScrollPlugin)
	options.plugins = {
		customScroll: {
			isHorizontal,
		}
	}

	Scrollbar.init(scrollContainer, options)
}