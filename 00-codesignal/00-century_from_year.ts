/**
 * Calculate the century of a year
 *
 * @param year - Input data with the year to be calculated.
 * @returns - the Century of the given year.
 */
function centuryFromYear(year: number): number {
	//Math.ceil() is a math method that returns the lower integer o real number.
	let century = Math.ceil(year / 100);
	return (century);
}

const year = 1900
const century = centuryFromYear(year)
console.log(century);
