import { learner1array, learner2array } from "./parse-learners-function.js";
import { assigmentsArray } from "./parse-assigments-function.js"

const objArr = []

for (let i = 0; i<assigmentsArray.length; i++){

const assignmentObj = {};

assignmentObj.id = assigmentsArray[i].id;
assignmentObj.points_possible = assigmentsArray[i].points_possible
assignmentObj.due_at = assigmentsArray[i].due_at;
assignmentObj.learner1Id = learner1array[0].learner_id;
assignmentObj.learner1score = learner1array[i].submission.score;
assignmentObj.learner1submitted = learner1array[i].submission.submitted_at;
assignmentObj.learner2Id = learner2array[0].learner_id;
assignmentObj.learner2score = learner2array[i]?.submission.score;
assignmentObj.learner2submitted = learner2array[i]?.submission.submitted_at;
assignmentObj.learner1avg = (learner1array[i].submission.score / assigmentsArray[i].points_possible) * 100;
assignmentObj.learner2avg = (learner2array[i]?.submission.score / assigmentsArray[i].points_possible) * 100;

objArr.push(assignmentObj)

//console.log(assignmentObj)
}
//console.log(objArr)
//console.log(learner1array)
export { objArr }
