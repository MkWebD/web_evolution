import { useEffect } from "react";

export function useIntersectionObserver<ElementType extends Element = Element>(
	referenceElement: React.RefObject<ElementType>,
	stateInitialValue: boolean,
	stateMutationFunction: (stateValue: boolean) => void
) {
	useEffect(() => {
		const observerOptions = {
			root: null,
			rootMargin: "0px",
			threshold: 0.8,
		};

		const observerCallback = (entries: IntersectionObserverEntry[]) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					console.log(entry);
					stateMutationFunction(!stateInitialValue);
				}
			}
		};
		const observer = new IntersectionObserver(observerCallback, observerOptions);
		if (referenceElement.current) {
			observer.observe(referenceElement.current);
		}

		return () => {
			observer.disconnect();
		};
	}, [referenceElement, stateInitialValue, stateMutationFunction]);
}
