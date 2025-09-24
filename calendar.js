// Keep this to 3 rolling months maximum to avoid overlapping years
const casualCalendar = [
    {
        month: "August",
        days: [4, 6, 7, 11, 13, 15, 19, 21, 22, 25, 26, 27, 28, 29],
    },
    {
        month: "September",
        days: [1, 4, 8, 9, 10, 11, 17, 18, 19, 20, 22, 25],
    },
    {
        month: "October",
        days: [1, 2, 6, 7, 8, 9, 10, 13, 15, 21, 24, 30, 31],
    },
];

const bonusDays = [
    {
        month: "August",
        unlocked: [7, 13, 22],
        locked: [18],
    },
    {
        month: "September",
        unlocked: [12, 15, 24, 30],
        locked: [],
    },
    {
        month: "October",
        unlocked: [],
        locked: [14, 23, 27, 29],
    },
];