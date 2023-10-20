import { learner1array, learner2array, seperateLearnersFromGroup } from "./parse-learners-function.js";
import { AssignmentGroup, LearnerSubmissions, CourseInfo } from "./sample-data.js";
import { buildAssigmentObjects } from "./build-assigment-objs-function.js";
import { assigmentsArray  } from "./parse-assigments-function.js";
import { assembleResultsArray } from "./build-result-array.js";



function getLearnerData(course, ag, submissions) {

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
