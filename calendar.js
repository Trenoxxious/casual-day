// Keep this to 3 rolling months maximum to avoid overlapping years
const casualCalendar = [
    {
        month: "December",
        days: [2, 5, 8, 12, 15, 18, 23, 24, 25, 31],
    },
    {
        month: "January",
        days: [1, 7, 8, 13, 15, 19, 21, 27, 30],
    },
    {
        month: "February",
        days: [2, 4, 10, 11, 17, 20, 23, 24, 25, 26, 27],
    },
];

const bonusDays = [
    {
        month: "December",
        unlocked: [11, 17, 26, 29, 30],
        locked: [],
    },
    {
        month: "January",
        unlocked: [],
        locked: [],
    },
    {
        month: "February",
        unlocked: [],
        locked: [],
    },
];