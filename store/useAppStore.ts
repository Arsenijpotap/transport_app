/** @format */
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
export interface Point {
	name: string;
	shortName: string | null;
}

interface Route {
	id: number;
	startingPointId: number;
	finalPointId: number;
	type: "Bus" | "TaxiBus";
	peculiarity: string | null;
	departureTime: string;
	arrivalTime: string;
	startingPoint: Point;
	finalPoint: Point;
	weekDays: string;
}

export interface AppState {
	data: Route[] | [];
	setData: (data: Route[] | []) => void;
}

const useAppStore = create<AppState>()(
	persist(
		(set) => ({
			data: [],
			setData: (data) => {
				set({ data });
			},
		}),
		{
			name: "app-data",
			storage: createJSONStorage(() => sessionStorage),
		}
	)
);
export default useAppStore;
