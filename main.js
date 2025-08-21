const yesItIs = document.querySelector('.yes');
const noItIsnt = document.querySelector('.no');
const notSure = document.querySelector('.not-sure');

const date = new Date();
const dayOfTheMonth = date.getDate();
const fullMonthName = date.toLocaleString('default', { month: 'long' });
const monthIndex = casualCalendar.findIndex(data => data.month === fullMonthName);

function getCasualDay(month, day) {
    const monthToCheck = casualCalendar[month].days;

    if (monthToCheck) {
        if (monthToCheck.findIndex(casualDay => casualDay === day)) {
            yesItIs.style.display = 'flex';
        } else {
            noItIsnt.style.display = 'flex';
        }
    } else {
        notSure.style.display = 'flex';
    }
}

getCasualDay(monthIndex, dayOfTheMonth);