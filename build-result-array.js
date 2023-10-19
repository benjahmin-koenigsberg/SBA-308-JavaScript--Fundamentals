import {  learner1Obj, learner2Obj } from "./build-assigment-objs-function.js";
const results = []


function assempleResultsArray(learnerObject1, learnerObject2){

    //learner 1 get possible points
    const l1_possiblePointsSum = learnerObject1.map((el) => el.points_possible).reduce((a, b) => a + b)
    //get learner 1 total score
    const l1_ScoreSum = learnerObject1.map((el) => el.learner1score).reduce((a, b) => a + b)
    //get learner 1 avg score
    const learner1avg = (l1_ScoreSum / l1_possiblePointsSum) * 100;

    const l1_resultsObj = {
        id: learnerObject1[0].learner1Id,
        avg: learner1avg,
        1: learnerObject1[0].learner1avg,
        2: learnerObject1[1].learner1avg,
        3: learnerObject1[2].learner1avg,
    }

    //learner 2 get possible points
    const l2_possiblePointsSum = learnerObject2.map((el) => el.points_possible).reduce((a, b) => a + b)
    //get learner 2 total score
    const l2_ScoreSum = learnerObject2.map((el) => el.learner1score).reduce((a, b) => a + b)
    //get learner 2 avg score
    const learner2avg = (l2_ScoreSum / l2_possiblePointsSum) * 100;

    const l2_resultsObj = {
        id: learnerObject2[0].learner1Id,
        avg: learner2avg,
        1: learnerObject2[0].learner1avg,
        2: learnerObject2[1].learner1avg,
        3: learnerObject2[2]?.learner1avg,
    }

    results.push(l1_resultsObj, l2_resultsObj)
    return results
}


//envoke function with learner objects
assempleResultsArray(learner1Obj, learner2Obj)



console.log(results)
//console.log(results)
