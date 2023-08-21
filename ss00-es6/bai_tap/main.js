let courses = [
    {
        id: 1,
        title: "ReactJS",
        rating: 4.2,
    },
    {
        id: 2,
        title: "Angular",
        rating: 2.5,
    },
    {
        id: 3,
        title: "VueJS",
        rating: 3.8,
    },
    {
        id: 4,
        title: "Java",
        rating: 4,
    },
    {
        id: 5,
        title: "Javascript",
        rating: 3.5,
    },
];

// 1.
// let newCourses = courses.filter((course) => course.rating >= 4);
// console.log(newCourses);

// 2.
// let newCourses = courses.filter((course) => course.rating < 4);
// let newArr = newCourses.map((course) => {
//     return `${course.id} - ${course.title} - ${course.rating}`;
// })
//
// console.log(newArr)

// 3.
// let addedCourses = [
//     {
//         id: 6,
//         title: 'PHP',
//         rating: 3
//     },
//     {
//         id: 7,
//         title: 'C#',
//         rating: 2
//     },
//     {
//         id: 8,
//         title: 'Docker',
//         rating: 3.8
//     }
// ];
//
// let newArr = [...courses, ...addedCourses];
// console.log(newArr);

const promise = new Pro();
