// Keep this to 3 rolling months maximum to avoid overlapping years
const casualCalendar = [
    {
        month: "October",
        days: [1, 2, 6, 7, 8, 9, 10, 13, 15, 21, 24, 30, 31],
    },
    {
        month: "November",
        days: [4, 6, 11, 14, 17, 18, 19, 20, 21, 26, 27],
    },
    {
        month: "December",
        days: [2, 5, 8, 12, 15, 18, 23, 24, 25, 31],
    }
];

const bonusDays = [
    {
        month: "October",
        unlocked: [14, 27, 29],
        locked: [23],
    },
    {
        month: "November",
        unlocked: [10, 13, 25],
        locked: [],
    },
    {
        month: "December",
        unlocked: [11, 17, 30],
        locked: [26],
    },
];