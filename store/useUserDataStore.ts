/** @format */
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
type regions = "минск" | "гомель";

export interface UserState {
	region: regions;
	setRegion: (region: regions) => void;
	toggleFavoriteList: (type: string) => void;
	favoriteList: string[];
}

const useUserStore = create<UserState>()(
	persist(
		(set) => ({
			region: "гомель",
			setRegion: (reg) => {
				set((state) => ({ region: reg }));
			},
			favoriteList: [],
			toggleFavoriteList: (favorite: string) => {
				set((state) => {
					const index = state.favoriteList.indexOf(favorite);

					if (index !== -1) {
						const newFavoriteList = [...state.favoriteList];
						newFavoriteList.splice(index, 1);
						return { favoriteList: newFavoriteList };
					} else {
						const newActiveList = [...state.favoriteList, favorite];
						return { favoriteList: newActiveList };
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
