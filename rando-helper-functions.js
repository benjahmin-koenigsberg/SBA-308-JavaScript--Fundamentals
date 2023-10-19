
//helper function to check if points_possible is 0
const checkForZeros = (assignmentGroup) => {
    return assignmentGroup.assignments.every(element => element.points_possible === 0)
}

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


const checkInputValues = (course, assigment, learner) => {

    if (courseInfoVerify(course) && assignmentInfoVerify(assigment) && learnerVerifyInfo(learner)) {
        return true
    }
    else {
        console.log("Pleas make sure all numerical inputs are valid");
        return false
    }
}
//checkInputValues(CourseInfo, AssignmentGroup, LearnerSubmissions)


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


//get learner avg
const getLearnAvg = (learner, assigmentGroup) => {
    const scoresArr = learner.map(el => el.submission.score);
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


function getLearnerScores(learners, ag) {


    //learner 1 score
    //const learner1Score = learner1.map(el => el.submission.score)
    //const avgScore = learner1Score.reduce((a,b)=>a+b) / learner1Score.length

    const assignmentArr = ag.assignments
    const pointsArr = assignmentArr.map(el => el.points_possible)

    console.log(pointsArr)

    const testArr = [];

    for (let i = 0; i < learner1Score.length; i++) {
        const obj = {}
        //  obj[i + 1] = learner1Score[i] / pointsArr[i];
        testArr.push(obj)
        //console.log( (learner1Score[i] / pointsArr[i]) )
    }
    console.log(testArr)

    const result = [];

    for (let i = 0; i < learner1Score.length; i++) {
        const scoreObj = {}
        //obj.avg = learner1Score.reduce((a, b) => a + b) / pointsArr.reduce((a, b) => a + b)
        scoreObj.id = i + 1;
        //scoreObj.score = learner1Score[i];

        // scoreObj.points_possible = pointsArr[i];
        const avgScore = learner1Score.reduce((a, b) => a + b) / pointsArr.reduce((a, b) => a + b)
        scoreObj[i] = avgScore

        scoreObj.avg = avgScore;
        result.push(scoreObj)
    }


    return result
}


//return learner id
const getLearerId = (learner) => {
    //console.log(learner[0].learner_id)
    return learner[0].learner_id;
}
