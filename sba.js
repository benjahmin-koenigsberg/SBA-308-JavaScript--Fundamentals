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
            points_possible: "150"
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
       // console.log('Course and Assigment MATCH')
        return true
    }
    else throw new Error("Course and Assigment IDs do not match");
}



// function matchAssigmentToCourse(groupId, courseId) {
//     if (groupId !== courseId) {
//         throw new Error("Course and Assigment IDs do not match");
//     }
// }

// try {
//     matchAssigmentToCourse(AssignmentGroup.id, CourseInfo.id)

// } catch(error) {
// console.log(error)
// }



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
   // console.log(course.id)
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
    const groupNums = [group.id, group.course_id, group.group_weight]

    group.assignments.forEach(el => groupNums.push(el.id, el.points_possible))
   // console.log(groupNums)

    groupNums.forEach(num => {
        if (typeof num === 'number') {
            return true
        }
        else {
            console.log("Pleas make sure all numerical inputs are valid");
            return false
        }
    })
}

const learnerVerifyInfo = (learnerInfo) => {

    const learnerNums = [];
    learnerInfo.forEach((el) => { learnerNums.push(el.learner_id, el.assignment_id, el.submission.score) })
    //console.log(learnerNums)
    learnerNums.forEach(num => {
        if (typeof num === 'number') {
            return true
        }
        else {
            console.log("Pleas make sure all numerical inputs are valid");
            return false
        }
    })
}

//console.log(learnerVerifyInfo(LearnerSubmissions))




console.log(assignmentInfoVerify(AssignmentGroup))

// console.log(courseInfoVerify(CourseInfo))

const checkInputValues = (course, assigment, learner) => {

    if ( courseInfoVerify(course) && assignmentInfoVerify(assigment) && learnerVerifyInfo(learner) ) {
    return true
    }
    else {
        console.log("Pleas make sure all numerical inputs are valid");
        return false
    }
}
checkInputValues(CourseInfo, AssignmentGroup, LearnerSubmissions)


//     Use try/catch and other logic to handle these types of errors gracefully.
// If an assignment is not yet due, don’t include it in the results or the average.




function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
    const result = [
        {
            id: 125,
            avg: 0.985, // (47 + 150) / (50 + 150)
            1: 0.94, // 47 / 50
            2: 1.0 // 150 / 150
        },
        {
            id: 132,
            avg: 0.82, // (39 + 125) / (50 + 150)
            1: 0.78, // 39 / 50
            2: 0.833 // late: (140 - 15) / 150
        }
    ];

    return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);

//Additionally, if the learner’s submission is late(submitted_at is past due_at), deduct 10 % of the total points possible from their score for that assignment.
// Create a function named getLearnerData() that accepts these values as parameters, in the order listed: (CourseInfo, AssignmentGroup, [LearnerSubmission]), and returns the formatted result, which should be an array of objects as described above.


//return learner id
const getLearerId = (learner) => {
    //console.log(learner[0].learner_id)
    return learner[0].learner_id;
}

//get learner avg
const getLearnAvg = (learner, assigmentGroup) => {
    const scoresArr = learner.map(el=>el.submission.score);
    //console.log(pointsArr)
    const assignmentArr = assigmentGroup.assignments
    const pointsArr = assignmentArr.map(el => el.points_possible)
    console.log(scoresArr)
    console.log(pointsArr)
    //console.log(scoresArr)
    //const scoreSum = scoresArr.reduce((a,b)=>a+b);

   // const pointsSum = pointsArr.reduce((a, b) => a + b);

    //const scoreAvg = (scoreSum / pointsSum );
    //console.log(scoreAvg)
}


// const getPoints = (assigmentGroup) => {

//     const assignmentArr = assigmentGroup.assignments
//     assignmentArr.forEach(el=>console.log(el.points_possible))
//    console.log(assignmentArr)
// }


getLearnAvg(LearnerSubmissions, AssignmentGroup)



function getLearnerData(course, ag, learner){
const learnerId = learner.id;

}

function getLearnerScores(learners, ag){

const learnersArr = []
learners.forEach( el=>{
    if(!learnersArr.includes(el.learner_id))
    learnersArr.push(el.learner_id)
})

console.log(learnersArr.length)


learnersArr.forEach( (el,i) => {
console.log(el, i)
})

const learner1 = learners.filter(el=>el.learner_id === learnersArr[0])
const learner1Score = learner1.map(el=>el.submission.score)

console.log(learner1Score)
//const avgScore = learner1Score.reduce((a,b)=>a+b) / learner1Score.length
//console.log(avgScore)
const learner2 = learners.filter(el=>el.learner_id === learnersArr[1])
const learner3 = learners.filter(el=>el.learner_id === learnersArr[2])

    const assignmentArr = ag.assignments
    const pointsArr = assignmentArr.map(el => el.points_possible)


console.log(learner1Score)
console.log(pointsArr)


const result = [];

for (let i = 0; i<learner1Score.length; i++){
    const scoreObj = {}
    scoreObj.id = i+1 ;
    //scoreObj.score = learner1Score[i];

   // scoreObj.points_possible = pointsArr[i];
    const avgScore = learner1Score.reduce((a, b) => a + b) / pointsArr.reduce((a, b) => a + b)
    scoreObj[i] = avgScore

    scoreObj.avg = avgScore;
    result.push(scoreObj)
}


    //console.log(avgScore)

// console.log(learner2)
// console.log(learner3)
return result
}

console.log(getLearnerScores(LearnerSubmissions, AssignmentGroup))
