/** @format */
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface StationState {
	searchText: string;
	setSearchText: (text: string) => void;
	isStationFavoriteActive: boolean;
	changeStationFavoriteActive: () => void;
}

const useStationStore = create<StationState>()(
	persist(
		(set) => ({
			searchText: "",
			setSearchText: (text) => {
				set(() => ({ searchText: text }));
			},
			isStationFavoriteActive: false,
			changeStationFavoriteActive: () => {
				set((state) => ({ isStationFavoriteActive: !state.isStationFavoriteActive }));
			},
		}),

		{
			name: "station-state",
			storage: createJSONStorage(() => localStorage),
		}
	)
);

export default useStationStore;
