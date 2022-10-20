import { ScrollbarPlugin } from 'smooth-scrollbar';

export default class InvertDeltaPlugin extends ScrollbarPlugin {
	static pluginName = 'invertDelta';

	static defaultOptions = {
		events: [],
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
		const isVertical = fromEvent.deltaX == 0
		const isMatch = this.options.events.some(rule => fromEvent.type.match(rule))
		return isMatch && isVertical;
	}
}
