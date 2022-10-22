export default function reactToPointer() {
	const elements = document.querySelectorAll('[react-to-pointer]')
	const divisorX = Math.ceil(window.innerWidth / -25)
	const divisorY = Math.ceil(window.innerHeight / -25)

	const targets = [...elements].map(element => {
		const elementRect = element.getBoundingClientRect();
		return {
			element,
			centerX: Math.round(elementRect.left) + (elementRect.width / 2),
			centerY: Math.round(elementRect.top) + (elementRect.height / 2),
		}
	})

	function pointerEvent(evt) {
		for (const target of targets) {
			const distanceX = evt.clientX - target.centerX
			const distanceY = evt.clientY - target.centerY
			const normalizedX = distanceX / divisorX
			const normalizedY = distanceY / divisorX
			target.element.style.transform = `translate(${normalizedX}px, ${normalizedY}px)`
		}
	}

	return { pointerEvent }
}