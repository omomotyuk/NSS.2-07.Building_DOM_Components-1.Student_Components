/*
//
*/

const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

function element ( div, h1, section, aside ) {
    this.div_class = div;
    this.h1_class = h1;
    this.section_class = section;
    this.aside_class = aside;
}

const createStudentComponent = ( student, element ) => {
    return `
        <div class="${element.div_class}">
            <h1 class="${element.h1_class}">${student.name}</h1>
            <section class="${element.section_class}">${student.subject}</section>
            <aside class="${element.aside_class}">${student.info}</aside>
        </div>
    `
}

const mainElement = document.querySelector( '#container' );

const elementPass = new element( "student", "xx-large passing", "bordered dashed section--padded", "pushRight" );
const elementFail = new element( "student", "", "", "" );

// Iterate the array of students, and apply the correct style to the h1 depending on the score of the student being below 60, or above it.
for (const student of students) {
    if (student.score >= 60) {
        mainElement.innerHTML += createStudentComponent( student, elementPass );
    } else {
        mainElement.innerHTML += createStudentComponent( student, elementFail );
    }
}
