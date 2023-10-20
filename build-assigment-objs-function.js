import { assigmentsArray } from "./parse-assigments-function.js"

//get current date and convert to same format as input data
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`.split('-').reverse().join('');
//console.log(currentDate);

function buildAssigmentObjects(learnerArray, agArray){

    const objArr = []

    for (let i = 0; i < learnerArray.length; i++) {

        const assignmentObj1 = {};

        const points_possible = agArray[i].points_possible;
        assignmentObj1.id = agArray[i].id;
        assignmentObj1.points_possible = agArray[i].points_possible
        assignmentObj1.due_at = +agArray[i].due_at.split('-').join('')
        assignmentObj1.learner1Id = learnerArray[0].learner_id;
        assignmentObj1.score = learnerArray[i].submission.score;
        assignmentObj1.avg = (learnerArray[i].submission.score / points_possible) * 100;
        assignmentObj1.submitted_at = +learnerArray[i].submission.submitted_at.split('-').join('');


        //check if assignment is late
        if ( assignmentObj1.submitted_at > assignmentObj1.due_at ){
        //if yes reduce avg score by 10%
        assignmentObj1.avg = assignmentObj1.avg *.9;
        }

        //check if assigment date is after todays date
        if ( assignmentObj1.due_at > currentDate ){
        //if so don't add it to the output array
        } else {
            objArr.push(assignmentObj1)
        }

}
return objArr;
}


export {  buildAssigmentObjects }
