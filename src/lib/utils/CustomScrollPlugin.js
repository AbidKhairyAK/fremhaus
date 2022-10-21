import { ScrollbarPlugin } from 'smooth-scrollbar';

export default class CustomScrollPlugin extends ScrollbarPlugin {
	static pluginName = 'customScroll';

	static defaultOptions = {
		isHorizontal: false,
	};

	transformDelta(delta, fromEvent) {
		if (this.shouldInvertDelta(fromEvent)) {
			return {
				x: delta.y,
				y: delta.x,
			};
		}

		return delta;
	}

	shouldInvertDelta(fromEvent) {
		// const isMouse = (fromEvent.deltaY > 60 || fromEvent.deltaY < -60) && fromEvent.deltaX <= 0
		const notVertical = fromEvent.deltaX == 0
		const isMatch = this.options.isHorizontal
		return isMatch && notVertical;
	}
}
