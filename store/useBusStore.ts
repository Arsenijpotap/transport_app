/** @format */
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface BusState {
	isDirectionToCity: boolean;
	searchText: string;
	setSearchText: (text: string) => void;
	isBusFavoriteActive: boolean;
	changeBusFavoriteActive: () => void;
	activeList: ("bus" | "taxiBus")[];
	toggleDirection: () => void;
	toggleActiveList: (type: "bus" | "taxiBus") => void;
}

const useBusStore = create<BusState>()(
	persist(
		(set) => ({
			searchText: "",
			setSearchText: (text) => {
				set(() => ({ searchText: text }));
			},
			isBusFavoriteActive: false,
			changeBusFavoriteActive: () => {
				set((state) => ({ isBusFavoriteActive: !state.isBusFavoriteActive }));
			},
			isDirectionToCity: true,
			toggleDirection: () => {
				set((state) => ({ isDirectionToCity: !state.isDirectionToCity }));
			},
			activeList: ["bus", "taxiBus"],
			toggleActiveList: (type: "bus" | "taxiBus") => {
				set((state) => {
					const index = state.activeList.indexOf(type);

					if (index !== -1) {
						const newActiveList = [...state.activeList];
						newActiveList.splice(index, 1);
						return { activeList: newActiveList };
					} else {
						const newActiveList = [...state.activeList, type];
						return { activeList: newActiveList };
					}
				});
			},
		}),
		{
			name: "bus-state",
			storage: createJSONStorage(() => localStorage),
		}
	)
);

export default useBusStore;
