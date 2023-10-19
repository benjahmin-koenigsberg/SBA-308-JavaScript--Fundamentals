import { objArr } from "./build-assigment-objs-function.js";
import { learner1array, learner2array } from "./parse-learners-function.js";

//get possible points
const possiblePointsSum = objArr.map((el)=>el.points_possible).reduce((a,b)=>a+b)

//get learner 1 total score
// const learner1ScoreSum = objArr.map((el) => el.learner1score).reduce((a, b) => a + b)
const learner1ScoreSum = objArr.filter(el => el.learner1Id === 125).map(el => el.learner1score).reduce((a, b) => a + b)


//get learner 1 avg score
const learner1avg = (learner1ScoreSum / possiblePointsSum) * 100;


//get learner 2 total score
const learner2ScoreSum = objArr.filter(el => el.learner2Id === 132).map((el) => el.learner2score).reduce((a, b) => a + b);
//get learner 2 avg score
const learner2avg = (learner2ScoreSum / possiblePointsSum) * 100;

//console.log(objArr)
console.log(learner1ScoreSum)

const learner1resultsObj = {
    id: learner1array[0].learner_id,
    avg: learner1avg,
     1: objArr[0].learner1avg,
     2: objArr[1].learner1avg,
     3: objArr[2].learner1avg,
}

const learner2resultsObj = {
    id: learner2array[0].learner_id,
    avg: learner2avg,
    1: objArr[3].learner2avg,
    2: objArr[4].learner2avg,
    3: objArr[5]?.learner2avg,
}

const results = []
results.push(learner1resultsObj, learner2resultsObj)


console.log(results)
