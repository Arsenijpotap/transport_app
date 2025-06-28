/** @format */

import { Dispatch, SetStateAction, useEffect } from "react";

export default function useLocalStorage<S>(setState: Dispatch<SetStateAction<S>>, value: S, name: string): void {
	useEffect(() => {
		const savedValue = localStorage.getItem(name);
		if (savedValue !== null) {
			try {
				const parsedValue = JSON.parse(savedValue) as S;
				setState(parsedValue);
			} catch (error) {
				console.error(`LocalStorage Error "${name}":`, error);
			}
		}
	}, [setState]);

	useEffect(() => {
		localStorage.setItem(name, JSON.stringify(value));
	}, [value]);
}
