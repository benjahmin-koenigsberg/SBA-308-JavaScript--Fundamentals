/*

{
    // the ID of the learner for which this data has been collected

    "id": number,
        // the learner’s total, weighted average, in which assignments
        // with more points_possible should be counted for more
        // e.g. a learner with 50/100 on one assignment and 190/200 on another
        // would have a weighted average score of 240/300 = 80%.
        "avg": number,
            // each assignment should have a key with its ID,
            // and the value associated with it should be the percentage that
            // the learner scored on the assignment (submission.score / points_possible)
            <assignment_id>: number,
    // if an assignment is not yet due, it should not be included in either
    // the average or the keyed dictionary of scores
}

*/


//sample data
// The provided course information.

const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};

const AssignmentGroup = {
    id: 451,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        {
            id: 1,
            name: "Declare a Variable",
            due_at: "2023-01-25",
            points_possible: 900
        },
        {
            id: 2,
            name: "Write a Function",
            due_at: "2023-02-27",
            points_possible: 150
        },
        {
            id: 3,
            name: "Code the World",
            due_at: "3156-11-15",
            points_possible: 500
        }
    ]
};


const LearnerSubmissions = [
    {
        learner_id: 125,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-25",
            score: 47
        }
    },
    {
        learner_id: 125,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-02-12",
            score: 150
        }
    },
    {
        learner_id: 125,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-01-25",
            score: 400
        }
    },
    {
        learner_id: 132,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-24",
            score: 39
        }
    },
    {
        learner_id: 132,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-03-07",
            score: 140
        }
    }
];

// If an AssignmentGroup does not belong to its course(mismatching course_id),
//your program should throw an error letting the user know that the input was invalid

//Similar data validation should occur elsewhere within the program.


//helper function to see if assigment and course IDs are matching

function matchAssigmentToCourse(groupId, courseId) {
    if (groupId === courseId) {
        console.log('Course and Assigment MATCH')
        return true
    }
    else throw new Error("Course and Assigments do not match");
}

//matchAssigmentToCourse(AssignmentGroup.id, CourseInfo.id)


// You should also account for potential errors in the data that your program receives.

//What if points_possible is 0 ? //You cannot divide by zero.
//helper function to check if points_possible is 0
const checkForZeros = (assignmentGroup) => {
    return assignmentGroup.assignments.every(element => element.points_possible === 0)
}

//console.log(checkForZeros(AssignmentGroup))


//What if a value that you are expecting to be a number is instead a string ?

const courseInfoVerify = (course) => {
    console.log(course.id)
    if (typeof course.id === 'number') {
        return true;

    }
    else {
        throw new Error("Pleas enter a number for the course ID")
        // console.log("Pleas enter a number for the course ID");
        return false
    }
}





const assignmentInfoVerify = (group) => {
    // console.log(group.id)

    const groupNums = [group.id, group.course_id, group.group_weight]

    group.assignments.forEach(el => groupNums.push(el.id, el.points_possible))
    console.log(groupNums)

    groupNums.forEach(num => {
        if (typeof num === 'number') {
            return true
        }
        else {
            throw new Error("Pleas make sure all numerical inputs are valid");
            return false
        }
    })
}





console.log(assignmentInfoVerify(AssignmentGroup))

// console.log(courseInfoVerify(CourseInfo))

const checkInputValues = () => {

}



//     Use try/catch and other logic to handle these types of errors gracefully.
// If an assignment is not yet due, don’t include it in the results or the average.Additionally, if the learner’s submission is late(submitted_at is past due_at), deduct 10 % of the total points possible from their score for that assignment.
// Create a function named getLearnerData() that accepts these values as parameters, in the order listed: (CourseInfo, AssignmentGroup, [LearnerSubmission]), and returns the formatted result, which should be an array of objects as described above.
