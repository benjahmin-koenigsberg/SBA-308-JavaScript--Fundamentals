import { learner1array, learner2array } from "./parse-learners-function.js";
import { assigmentsArray } from "./parse-assigments-function.js"


const objArr = []

// for (let i = 0; i<assigmentsArray.length; i++){

// const assignmentObj = {};

// assignmentObj.id = assigmentsArray[i].id;
// assignmentObj.points_possible = assigmentsArray[i].points_possible
// assignmentObj.due_at = assigmentsArray[i].due_at.split('-').join('');
// assignmentObj.learner1Id = learner1array[0].learner_id;
// assignmentObj.learner1score = learner1array[i].submission.score;
// assignmentObj.learner1submitted = learner1array[i].submission.submitted_at.split('-').join('');
// assignmentObj.learner2Id = learner2array[0].learner_id;
// assignmentObj.learner2score = learner2array[i]?.submission.score;
// assignmentObj.learner2submitted = learner2array[i]?.submission.submitted_at.split('-').join('');
// const points_possible = assigmentsArray[i].points_possible;
// assignmentObj.learner1avg = (learner1array[i].submission.score / points_possible ) * 100;
// assignmentObj.learner2avg = (learner2array[i]?.submission.score / points_possible ) * 100;
// objArr.push(assignmentObj)
// }

// function buildAssignmentObject(learnerArray1, learnerArray2, assignment_group){
// }



for (let i = 0; i < learner1array.length; i++) {

    const assignmentObj1 = {};


    const points_possible = assigmentsArray[i].points_possible;

    assignmentObj1.id = assigmentsArray[i].id;
    assignmentObj1.points_possible = assigmentsArray[i].points_possible
    assignmentObj1.due_at = assigmentsArray[i].due_at.split('-').join('');
    assignmentObj1.learner1Id = learner1array[0].learner_id;
    assignmentObj1.learner1score = learner1array[i].submission.score;
    assignmentObj1.learner1avg = (learner1array[i].submission.score / points_possible) * 100;
    assignmentObj1.learner1submitted = learner1array[i].submission.submitted_at.split('-').join('');


    objArr.push(assignmentObj1)

}

for (let i = 0; i < learner2array.length; i++) {

    const assignmentObj2 = {};

    const points_possible = assigmentsArray[i].points_possible;

    assignmentObj2.id = assigmentsArray[i].id;
    assignmentObj2.points_possible = assigmentsArray[i].points_possible
    assignmentObj2.due_at = assigmentsArray[i].due_at.split('-').join('');
    assignmentObj2.learner2Id = learner2array[0].learner_id;
    assignmentObj2.learner2score = learner2array[i].submission.score;
    assignmentObj2.learner2submitted = learner2array[i].submission.submitted_at.split('-').join('');
    assignmentObj2.learner2avg = (learner2array[i].submission.score / points_possible) * 100;

    objArr.push(assignmentObj2)


}

//function to get total scores and total possible points

//const total_points = objArr.map(el=>el.points_possible).reduce((a,b)=>a+b)
// const learner1totalAvg = objArr.filter( el=>el.learner1Id === 125 ).map(el => el.learner1score).reduce((a, b) => a + b)



// console.log(objArr)
// console.log(total_points)

export { objArr }
