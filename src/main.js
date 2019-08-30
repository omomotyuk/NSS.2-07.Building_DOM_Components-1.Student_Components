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

// function to create '.class' list for created elements
function element ( div, h1, section, aside ) {
    this.div_class = div;
    this.h1_class = h1;
    this.section_class = section;
    this.aside_class = aside;
}

// function to create 'Student' component
const createStudentComponent = ( student, element ) => {
    return `
        <div class="${element.div_class}">
            <h1 class="${element.h1_class}">${student.name}</h1>
            <section class="${element.section_class}">${student.subject}</section>
            <aside class="${element.aside_class}">${student.info}</aside>
        </div>
    `
}

/*
Write functions that build the sub-components of the larger student component.
Invoke those functions inside the createStudentComponent function to build the parent <div>.
*/
// small function to generate <h1> element
const h1 = (student, element) => {
    return `<h1 class="${element.h1_class}">${student.name}</h1>`
}

// small function to create <section> element
const section = (student, element) => {
    return `<section class="${element.section_class}">${student.subject}</section>`
}          

// small function to create <aside> element
const aside = (student, element) => {
    return `<aside class="${element.aside_class}">${student.info}</aside>`
}          

// function to create 'Student' component with use of small functions
const createStudentSmallerComponent = ( student, element ) => {
    return `
        <div class="${element.div_class}">
            ${h1( student, element )}
            ${section( student, element )}
            ${aside( student, element )}
        </div>
    `
}

// generic function to create component_type element
const elementGeneric = ( component_type, component_content, class_attribute ) => {
return `<${component_type} class="${class_attribute}">${component_content}</${component_type}>`
}

// function to create 'Student' component with use of generic function
const createStudentGenericComponent = (student, element) => `
    <div class="${element.div_class}">
        ${elementGeneric("h1", student.name, element.h1_class)}
        ${elementGeneric("section", student.subject, element.section_class)}
        ${elementGeneric("aside", student.info, element.aside_class)}
    </div>
`

// selection of 'container' component of page
const mainElement = document.querySelector( '#container' );

// creation of description elements
const elementPass = new element( "student", "xx-large passing", "bordered dashed section--padded", "pushRight" );
const elementFail = new element( "student", "", "", "" );

// Iterate the array of students, and apply the correct style to the h1 depending on the score of the student being below 60, or above it.

// function for creation of required DOM element
const createDOMElement = ( functionParam ) => {
    for (const student of students) {
        if (student.score >= 60) {
            mainElement.innerHTML += functionParam( student, elementPass );
        } else {
            mainElement.innerHTML += functionParam( student, elementFail );
        }
    }
}

//
//createDOMElement( createStudentComponent );
//
//createDOMElement( createStudentSmallerComponent );
//
createDOMElement( createStudentGenericComponent );