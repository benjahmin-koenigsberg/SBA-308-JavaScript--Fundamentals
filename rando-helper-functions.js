
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




function getAssigmentInfo(ag) {
    const assignments = ag.assignments
    console.log(assignments)
    const assignmentsArray = []
    assignments.map(element => {
        const obj = {};
        obj.id = element.id
        obj.points_possible = element.points_possible;

        assignmentsArray.push(obj)
    });
    console.log(assignmentsArray)
    return assignmentsArray
}

//getAssigmentInfo(AssignmentGroup)




function getAssigmentInfo(ag){
const result = [];
ag.assignments.forEach(el=>{
    result.push({id: el.id, points_possible: el.points_possible})
})
return result
}



function getStudentScores(lg) {

    const learnersArr = []
    lg.map((el) => {
        const obj = {};
        obj.learner_id = el.learner_id;
        obj.id = el.assignment_id
        obj.score = el.submission.score
        learnersArr.push(obj)
    })
    return learnersArr;
}

const students = getStudentScores(LearnerSubmissions)
const assignments = getAssigmentInfo(AssignmentGroup)

const assigmentElement = assignments.map(el=>el)



function getStudentScores(lg) {

    const learnersArr = []
    lg.map((el) => {
        const obj = {};
        obj.id = el.learner_id;
        obj.assignment_id = el.assignment_id
        obj.score = el.submission.score
        learnersArr.push(obj)
    })
    return learnersArr;
}


//console.log(getStudentScores(LearnerSubmissions))




function getAssigmentInfo(ag) {
    const assignments = ag.assignments
    //console.log(assignments)
    const assignmentsArray = []
    assignments.map(element => {
        const obj = {};
        obj.id = element.id
        obj.points_possible = element.points_possible;
        assignmentsArray.push(obj)
    });
    console.log(assignmentsArray)
    return assignmentsArray
}


function combineData(ag, lg) {
    const assignments = ag.assignments

    const result = [...assignments]
    //console.log(getStudentScores(LearnerSubmissions))
    // console.log(result)
}


//getAssigmentInfo(AssignmentGroup)
//combineData(AssignmentGroup, LearnerSubmissions)
//console.log(getAssigmentInfo(AssignmentGroup), getStudentScores(LearnerSubmissions))


const obj = {
    learnerId: 125,
    assignments: [
        { id: 1, score: 100, possibleScore: 100, avg: 100 },
        { id: 2, score: 100, possibleScore: 100, avg: 100 },
        { id: 3, score: 100, possibleScore: 100, avg: 100 }
    ],
}


//const student1 = LearnerSubmissions.filter(el=>el.learner_id === 125)
