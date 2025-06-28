/** @format */

import { ScheduleItem } from "@/components/ScheduleItem/ScheduleItem";
import weekDays from "./../constants/weekDays";
import getDaysArray from "./getDaysArray";
let schedule: {
	[key: string]: string[];
} = {};

function getSchedule(data: ScheduleItem[]) {
	// let newData = data.map((value) => {
	// 	return { ...value, departureTime: parseFloat(value.departureTime) };
	// });

	weekDays.forEach((day) => {
		let daySchedule: string[] = [];
		data.forEach((value) => {
			if (value.weekDays.indexOf(day) != -1) {
				if (value.peculiarity) {
					daySchedule.push(value.departureTime + "*");
				} else {
					daySchedule.push(value.departureTime);
				}
			}
		});
		schedule[day] = daySchedule.sort((a, b) => parseFloat(a) - parseFloat(b));
	});
	let correctData: string[] = [];
	let date = new Date();
	let formatDate = date.getHours() + date.getMinutes() / 100;

	let dateArray = getDaysArray();
	console.log(dateArray);
	dateArray.forEach((value, index) => {
		let sch = schedule[value];

		if (index == 0) {
			sch = sch.filter((a) => parseFloat(a) > formatDate);
		}
		if (correctData.length <= 8) correctData.push(...sch);
	});
	if (correctData.length < 8) {
		correctData.splice(4);
	} else {
		correctData.splice(8);
	}
	return correctData;
}

export default getSchedule;
