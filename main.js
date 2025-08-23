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
    debugger;
    if (month === -1) return notSure.style.display = 'flex';

    const monthToCheck = casualCalendar[month].days;
    const isItCasual = monthToCheck.findIndex(casualDay => casualDay === day) !== -1;

    const lockedBonusDays = bonusDays[month].locked;
    const lockedDay = lockedBonusDays.findIndex(locked => locked === day) !== -1;
    const unlockedBonusDays = bonusDays[month].unlocked;
    const unlockedDay = unlockedBonusDays.findIndex(unlocked => unlocked === day) !== -1;

    if (isItCasual) {
        yesItIs.style.display = 'flex';
        if (unlockedDay) {
            yesItIs.innerHTML = `
                <span style="color: rgb(255, 254, 243);">Yes, it is a <b>bonus</b> casual day.</span>
                <div style="filter: drop-shadow(0 0 25px rgb(117, 238, 123));">
                    <svg xmlns="http://www.w3.org/2000/svg" height="300px" viewBox="0 -960 960 960" width="300px"
                        fill="currentColor">
                        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                    </svg>
                </div>
            `;
        }
    } else {
        noItIsnt.style.display = 'flex';
        if (lockedDay) {
            noItIsnt.innerHTML = `
                <span style="color: rgb(255, 254, 243);">No, it is <b>not</b> a bonus casual day.</span>
                <div style="filter: drop-shadow(0 0 25px rgba(226, 60, 60, 1));">
                    <svg xmlns="http://www.w3.org/2000/svg" height="300px" viewBox="0 -960 960 960" width="300px"
                        fill="currentColor">
                        <path
                            d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                </div>
            `;
        }
    }
}

// Call the function on page load
getCasualDay(monthIndex, dayOfTheMonth);