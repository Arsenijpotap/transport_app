/** @format */
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
type regions = "минск" | "гомель";

export interface UserState {
	region: regions;
	setRegion: (region: regions) => void;
}

const useUserStore = create<UserState>()(
	persist(
		(set) => ({
			region: "гомель",
			setRegion: (reg) => {
				set((state) => ({ region: reg }));
			},
		}),
		{
			name: "user-data",
			storage: createJSONStorage(() => localStorage),
		}
	)
);
export default useUserStore;
