import { useEffect } from "react";

/**
 * Custom hook that uses the IntersectionObserver API to observe an element and mutate a state value when the element is visible
 * @param referenceElement React ref object that references the element to be observed
 * @param stateInitialValue Initial visibility state value
 * @param stateMutationFunction Function that mutates the state value
 * @param observerOptions Options for the intersectionObserver API
 */
export function useIntersectionObserver<ElementType extends Element = Element>(
	referenceElement: React.RefObject<ElementType>,
	stateInitialValue: boolean,
	stateMutationFunction: (stateValue: boolean) => void,
	observerOptions: object = { root: null, rootMargin: "0px", threshold: 0.8 }
) {
	useEffect(() => {
		const observerCallback = (entries: IntersectionObserverEntry[]) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
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
	}, [referenceElement, stateInitialValue, stateMutationFunction, observerOptions]);
}
