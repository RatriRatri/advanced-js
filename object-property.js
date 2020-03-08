const students = [{
        id: 12,
        name: 'ratri'
    },
    {
        id: 21,
        name: 'nishi'
    },
    {
        id: 31,
        name: 'jidan'
    },
    {
        id: 40,
        name: 'sakin'
    }
];
const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 21);
console.log(bigger);