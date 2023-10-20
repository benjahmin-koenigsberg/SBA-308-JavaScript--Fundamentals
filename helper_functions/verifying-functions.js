import { LearnerSubmissions, AssignmentGroup, CourseInfo } from "../sample-data.js";

//helper function to check if points_possible is 0
const checkForZeros = (assignmentGroup) => {
    if (assignmentGroup.assignments.every(element => element.points_possible !== 0)) {
        return true
    } else {
        throw new Error('Points possible cannot be 0')
    }
}

//console.log(checkForZeros(AssignmentGroup))
const courseInfoVerify = (course) => {
    if (typeof course.id === 'number') {
        return true;
    }
    else {
        throw new Error("Pleas enter a number for the course ID")
    }
}

//console.log(courseInfoVerify(CourseInfo))
const assignmentInfoVerify = (group) => {
    const groupNums = [group.id, group.course_id, group.group_weight]
    group.assignments.forEach(el => groupNums.push(el.id, el.points_possible))
    if (groupNums.every(num => typeof num === 'number')) {
        return true
    } else {
        throw new Error("Pleas make sure all numerical inputs are valid numbers")
    }
}

//console.log(assignmentInfoVerify(AssignmentGroup))
const learnerVerifyInfo = (learnerInfo) => {

    const learnerNums = [];
    learnerInfo.forEach((el) => { learnerNums.push(el.learner_id, el.assignment_id, el.submission.score) })
    //console.log(learnerNums)
    if (learnerNums.every(num => typeof num === 'number')) {
        return true
    } else {
        throw new Error("Pleas make sure all numerical inputs are valid numbers")
    }
}

const checkInputValues = (course, assigment, learner) => {
    if (courseInfoVerify(course) && assignmentInfoVerify(assigment) && learnerVerifyInfo(learner)) {
        return true
    }
    else {
        throw new Error("Pleas make sure all numerical inputs are valid numbers")
    }
}


//helper function to see if assigment and course IDs are matching
function matchAssigmentToCourse(groupId, courseId) {
    if (groupId === courseId) {
        // console.log('Course and Assigment MATCH')
        return true
    }
    else {
        throw new Error("Course and Assigment IDs do not match");
    }
}


export { checkForZeros, courseInfoVerify, assignmentInfoVerify, learnerVerifyInfo, checkInputValues, matchAssigmentToCourse }
