// our HTML elements
const yesItIs = document.querySelector('.yes');
const noItIsnt = document.querySelector('.no');
const notSure = document.querySelector('.not-sure');

// Date constructor takes year, month, day (for testing) - without constructing returns the current date
const date = new Date();
const dayOfTheMonth = date.getDate();
const fullMonthName = date.toLocaleString('default', { month: 'long' });
const monthIndex = casualCalendar.findIndex(data => data.month === fullMonthName);

// We check for casual day here
function getCasualDay(month, day) {
    if (month === -1) return notSure.style.display = 'flex';

    const monthToCheck = casualCalendar[month].days;
    const isItCasual = monthToCheck.findIndex(casualDay => casualDay === day) !== -1;

    if (isItCasual) {
        yesItIs.style.display = 'flex';
    } else {
        noItIsnt.style.display = 'flex';
    }
}

// Call the function on page load
getCasualDay(monthIndex, dayOfTheMonth);