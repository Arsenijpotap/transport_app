/** @format */

import { Dispatch, SetStateAction, useEffect } from "react";

export default function useSessionStorage<S>(setState: Dispatch<SetStateAction<S>>, value: S, name: string): void {
	useEffect(() => {
		const savedValue = sessionStorage.getItem(name);
		if (savedValue !== null) {
			try {
				const parsedValue = JSON.parse(savedValue) as S;
				setState(parsedValue);
			} catch (error) {
				console.error(`sessionStorage Error "${name}":`, error);
			}
		}
	}, [setState]);

	useEffect(() => {
		sessionStorage.setItem(name, JSON.stringify(value));
	}, [value]);
}
