//import { learner1array, learner2array } from "./parse-learners-function.js";
import { assigmentsArray } from "./parse-assigments-function.js"



function buildAssigmentObjects(learnerArray, agArray){

    const objArr = []

    for (let i = 0; i < learnerArray.length; i++) {

        const assignmentObj1 = {};

        const points_possible = agArray[i].points_possible;
        assignmentObj1.id = agArray[i].id;
        assignmentObj1.points_possible = agArray[i].points_possible
        assignmentObj1.due_at = agArray[i].due_at.split('-').join('');
        assignmentObj1.learner1Id = learnerArray[0].learner_id;
        // assignmentObj1.learner1score = learnerArray[i].submission.score;
        assignmentObj1.score = learnerArray[i].submission.score;
        // assignmentObj1.learner1avg = (learnerArray[i].submission.score / points_possible) * 100;
        assignmentObj1.avg = (learnerArray[i].submission.score / points_possible) * 100;
        assignmentObj1.learner1submitted = learnerArray[i].submission.submitted_at.split('-').join('');
        objArr.push(assignmentObj1)

}
return objArr;
}

//const learner1Obj = buildAssigmentObjects(learner1array, assigmentsArray );
// const learner2Obj = buildAssigmentObjects(learner2array, assigmentsArray);
//console.log(learner1Obj)

export {  buildAssigmentObjects }
