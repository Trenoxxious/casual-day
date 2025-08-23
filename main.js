// our HTML elements
const yesItIs = document.querySelector('.yes');
const noItIsnt = document.querySelector('.no');
const notSure = document.querySelector('.not-sure');

// Date constructor takes year, month, day (for testing) - without constructing returns the current date
const date = new Date();
const dayOfTheMonth = date.getDate();
const fullMonthName = date.toLocaleString('default', { month: 'long' });
const fullDayName = date.toLocaleString('default', { weekday: 'long' });
const monthIndex = casualCalendar.findIndex(data => data.month === fullMonthName);

const weekendsAreCasual = true;

// We check for casual day here
function getCasualDay(month, day) {
    if (month === -1) return notSure.style.display = 'flex';

    const monthToCheck = casualCalendar[month].days;
    const isItCasual = monthToCheck.findIndex(casualDay => casualDay === day) !== -1 || ((fullDayName.toLowerCase() === "saturday" || fullDayName.toLowerCase() === "sunday") && weekendsAreCasual);

    const lockedBonusDays = bonusDays[month].locked;
    const lockedDay = lockedBonusDays.findIndex(locked => locked === day) !== -1;
    const unlockedBonusDays = bonusDays[month].unlocked;
    const unlockedDay = unlockedBonusDays.findIndex(unlocked => unlocked === day) !== -1;

    if (isItCasual) {
        document.title = `Is It Casual Day? Yes!`;
        yesItIs.style.display = 'flex';
        document.body.style = `background: linear-gradient(to bottom left, rgba(33, 68, 47, 1), rgb(26, 26, 26));`;
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
        document.title = `Is It Casual Day? No.`;
        noItIsnt.style.display = 'flex';
        document.body.style = `background: linear-gradient(to bottom left, rgba(68, 33, 33, 1), rgb(26, 26, 26));`;
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