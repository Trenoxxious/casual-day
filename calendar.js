// Keep this to 3 rolling months maximum to avoid overlapping years
const casualCalendar = [
    {
        month: "August",
        days: [4, 6, 7, 11, 13, 15, 19, 21, 22, 25, 26, 27, 28, 29],
    },
    {
        month: "September",
        days: [],
    },
    {
        month: "October",
        days: [],
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
        unlocked: [],
        locked: [],
    },
    {
        month: "October",
        unlocked: [],
        locked: [],
    },
];