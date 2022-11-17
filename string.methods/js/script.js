// Визначте функцію brth(s1,s2), яка повертає кількість днів, що залишилися до дня народження.
// Функція отримує два рядки: у першій записано дату народження у форматі: "дд.мм" ,
// а в другій – поточну дату в форматі: "дд.мм.гггг".
// Наприклад, brth("02.07","11.06.2016") = 21.
let birthDay = prompt("Enter your birth-Day: \n For example 15.08 without year", '');
function brth (birthDay) {
	let currentD = new Date();
	let currentYear = String(currentD.getFullYear());
	let currentMonth = String(currentD.getMonth() + 1);
	let currentDay = String(currentD.getDate());
	if (currentMonth < 10) {
		currentMonth = '0' + currentMonth;
	}
	if (currentDay < 10) {
		currentDay = '0' + currentDay;
	}
	let currentDate = `${currentDay}.${currentMonth}.${currentYear}`;
	const months = {
		1: 31,
		2: 28,
		3: 31,
		4: 30,
		5: 31,
		6: 30,
		7: 31,
		8: 31,
		9: 30,
		10: 31,
		11: 30,
		12: 31
	}
	const current = currentDate.split('.');
	const birth = birthDay.split('.');
	let sumDaysCurrent = 0;
	let daysCurr = current[0]
	let monthCurrent = current[1];
	let sumDaysBirth = 0;
	let daysBirth = birth[0]
	let monthBirth = birth[1];
	let specialYear = current[2];
	if (specialYear % 4 == 0) {
		months['2'] = 29;
	}
	for (let i = 1; i < monthCurrent; i++) {
		sumDaysCurrent += months[`${i}`];
	}
	sumDaysCurrent = sumDaysCurrent + Number(daysCurr);
	for (let i = 1; i < monthBirth; i++) {
		sumDaysBirth += months[`${i}`];
	}
	sumDaysBirth = sumDaysBirth + Number(daysBirth);
	let difference = sumDaysBirth - sumDaysCurrent;
	if (difference > 0) {
		return alert("Your birth-day will after: " + difference + " days");
	}
	return alert("Your birth-day will after: " + Number(365 - sumDaysCurrent + sumDaysBirth) + " days");
}
brth(birthDay);

