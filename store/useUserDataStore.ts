/** @format */
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
type regions = "минск" | "гомель";

export interface UserState {
	region: regions;
	setRegion: (region: regions) => void;
	toggleFavoriteBusList: (type: string) => void;
	favoriteBusList: string[];
	toggleFavoriteStationsList: (type: string) => void;
	favoriteStationsList: string[];
}

const useUserStore = create<UserState>()(
	persist(
		(set) => ({
			region: "гомель",
			setRegion: (reg) => {
				set((state) => ({ region: reg }));
			},
			favoriteBusList: [],
			toggleFavoriteBusList: (favorite: string) => {
				set((state) => {
					const index = state.favoriteBusList.indexOf(favorite);

					if (index !== -1) {
						const newFavoriteList = [...state.favoriteBusList];
						newFavoriteList.splice(index, 1);
						return { favoriteBusList: newFavoriteList };
					} else {
						const newActiveList = [...state.favoriteBusList, favorite];
						return { favoriteBusList: newActiveList };
					}
				});
			},
			favoriteStationsList: [],
			toggleFavoriteStationsList: (favorite: string) => {
				set((state) => {
					const index = state.favoriteStationsList.indexOf(favorite);

					if (index !== -1) {
						const newFavoriteList = [...state.favoriteStationsList];
						newFavoriteList.splice(index, 1);
						return { favoriteStationsList: newFavoriteList };
					} else {
						const newActiveList = [...state.favoriteStationsList, favorite];
						return { favoriteStationsList: newActiveList };
					}
				});
			},
		}),
		{
			name: "user-data",
			storage: createJSONStorage(() => localStorage),
		}
	)
);
export default useUserStore;
