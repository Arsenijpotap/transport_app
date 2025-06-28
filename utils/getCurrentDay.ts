/** @format */

import weekDays from "@/constants/weekDays";

let date = new Date();
let weekDay = date.getDay();
let currentDay = weekDays[weekDay - 1];
export default currentDay;
