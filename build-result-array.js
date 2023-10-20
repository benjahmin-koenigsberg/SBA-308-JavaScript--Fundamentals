//import {  learner1Obj, learner2Obj } from "./build-assigment-objs-function.js";
const results = []


 function assembleResultsArray(learnerObject) {

    //learner 1 get possible points
    const possiblePointsSum = learnerObject.map((el) => el.points_possible).reduce((a, b) => a + b)
    //get learner 1 total score
    const scoreSum = learnerObject.map((el) => el.score).reduce((a, b) => a + b)
    //get learner 1 avg score
    const avg = (scoreSum / possiblePointsSum) * 100;

    const resultsObj = {
        id: learnerObject[0].learner1Id,
        avg: avg.toFixed(2),
        1: learnerObject[0].avg,
        2: learnerObject[1].avg,
        3: learnerObject[2]?.avg,
    }
if(resultsObj['3']===undefined) delete resultsObj['3'];

    return resultsObj;
}

export {assembleResultsArray}

// const learnerOne = assembleResultsArray(learner1Obj)
// const learnerTwo = assembleResultsArray(learner2Obj)
//results.push(learnerOne, learnerTwo)






//console.log(results)
//console.log(results)
