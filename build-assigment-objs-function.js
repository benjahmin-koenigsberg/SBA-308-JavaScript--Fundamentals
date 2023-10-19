import { learner1array, learner2array } from "./parse-learners-function.js";
import { assigmentsArray } from "./parse-assigments-function.js"


//assigment object array
//[
//{ id: 1, possible_score: 500, student1Score: 400, student2Score: 350, due_date: "some-date"},
//]
const objArr = []

const assignmentObj = {
    id: undefined,
    due_at: undefined,
    points_possible: undefined,
    learner1score: undefined,
    learner1submitted: undefined,
    learner1avg: undefined,
    learner2score: undefined,
    learner2submitted: undefined,
    learner2avg: undefined,

}

for (let i = 0; i<assigmentsArray.length; i++){
assignmentObj.id = assigmentsArray[i].id;
assignmentObj.points_possible = assigmentsArray[i].points_possible
assignmentObj.due_at = assigmentsArray[i].due_at;

assignmentObj.learner1score = learner1array[i].submission.score;
assignmentObj.learner1submitted = learner1array[i].submission.submitted_at;

assignmentObj.learner2score = learner2array[i]?.submission.score;
assignmentObj.learner2submitted = learner2array[i]?.submission.submitted_at;

assignmentObj.learner1avg = (learner1array[i].submission.score / assigmentsArray[i].points_possible) * 100;
assignmentObj.learner2avg = (learner2array[i]?.submission.score / assigmentsArray[i].points_possible) * 100;

objArr.push(assignmentObj)
console.log(assignmentObj)
}
