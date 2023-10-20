//sample input data
import { AssignmentGroup, LearnerSubmissions, CourseInfo } from "./sample-data.js";

import { learner1array, learner2array, seperateLearnersFromGroup } from "./helper_functions/parse-learners-function.js";
import { buildAssigmentObjects } from "./helper_functions/build-assigment-objs-function.js";
import { assigmentsArray } from "./helper_functions/parse-assigments-function.js";
import { assembleResultsArray } from "./helper_functions/build-result-array.js";
import { checkForZeros, courseInfoVerify, matchAssigmentToCourse, checkInputValues } from "./helper_functions/verifying-functions.js";



function getLearnerData(course, ag, submissions) {

    // //verify that all possible points are greater than 0
    try {
        checkForZeros(ag)

    } catch (error) {
        console.log(error.message)
    }
    //verify the course has int for id
    try {
        courseInfoVerify(course)
    } catch (error) {
        console.log(error.message)
    }
    //verify that course and assignments match
    try {
        matchAssigmentToCourse(AssignmentGroup.id, CourseInfo.id)
    } catch (error) {
        console.log(error.message)
    }
    //verify that all numerical values have integers for inputs
    try {
        checkInputValues(course, ag, submissions)
    } catch (error) {
        console.log(error.message);
    }


    let results = []

    seperateLearnersFromGroup(LearnerSubmissions);

    const l1 = buildAssigmentObjects(learner1array, assigmentsArray)
    const l2 = buildAssigmentObjects(learner2array, assigmentsArray)


    results.push(assembleResultsArray(l1))
    results.push(assembleResultsArray(l2))

    return results;
}


const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result)
