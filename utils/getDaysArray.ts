/** @format */

import weekDays from "@/constants/weekDays";
import currentDay from "./getCurrentDay";

function getDaysArray() {
	let sliceStart = weekDays.slice(weekDays.indexOf(currentDay), weekDays.length);
	let sliceEnd = weekDays.slice(0, weekDays.indexOf(currentDay));

	return [...sliceStart, ...sliceEnd];
}
export default getDaysArray;
