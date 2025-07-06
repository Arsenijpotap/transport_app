/** @format */

import weekDays from "@/constants/weekDays";

let date = new Date();
let weekDay = date.getDay();
let currentDay = weekDays[weekDay != 0 ? weekDay - 1 : 6];
console.log(weekDays);
console.log(weekDay);
export default currentDay;
