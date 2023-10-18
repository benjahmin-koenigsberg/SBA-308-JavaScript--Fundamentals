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
            points_possible: 50
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


// If an AssignmentGroup does not belong to its course(mismatching course_id),
//your program should throw an error letting the user know that the input was invalid
//Similar data validation should occur elsewhere within the program.


//helper function to see if assigment and course IDs are matching
const matchAssigmentToCourse = (assigmentId, courseId) => assigmentId === courseId;
const testResult = matchAssigmentToCourse(AssignmentGroup.id, CourseInfo.id);




// You should also account for potential errors in the data that your program receives.What if points_possible is 0 ? You cannot divide by zero.What if a value that you are expecting to be a number is instead a string ?
//     Use try/catch and other logic to handle these types of errors gracefully.
// If an assignment is not yet due, don’t include it in the results or the average.Additionally, if the learner’s submission is late(submitted_at is past due_at), deduct 10 % of the total points possible from their score for that assignment.
// Create a function named getLearnerData() that accepts these values as parameters, in the order listed: (CourseInfo, AssignmentGroup, [LearnerSubmission]), and returns the formatted result, which should be an array of objects as described above.
