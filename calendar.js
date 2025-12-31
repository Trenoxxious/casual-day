// Keep this to 3 rolling months maximum to avoid overlapping years
const casualCalendar = [
    {
        month: "November",
        days: [4, 6, 11, 14, 17, 18, 19, 20, 21, 26, 27],
    },
    {
        month: "December",
        days: [2, 5, 8, 12, 15, 18, 23, 24, 25, 31],
    },
    {
        month: "January",
        days: [1, 7, 8, 13, 15, 19, 21, 27, 30],
    },
];

const bonusDays = [
    {
        month: "November",
        unlocked: [10, 13, 25],
        locked: [],
    },
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
];