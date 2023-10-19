import { LearnerSubmissions } from "./sample-data.js";

let learner1array;
let learner2array;


//seperate learers from learner group function
function seperateLearnersFromGroup(learnersGroup) {

    const learnersArr = []
    learnersGroup.forEach(el => {
        if (!learnersArr.includes(el.learner_id))
            learnersArr.push(el.learner_id)
    })
    //learner 1
    const learner1 = learnersGroup.filter(el => el.learner_id === learnersArr[0])

    //learner 2
    const learner2 = learnersGroup.filter(el => el.learner_id === learnersArr[1])

    //console.log(learner1)
    learner1array = learner1
    learner2array = learner2
    return ;
}


//envoking function to parse learners
seperateLearnersFromGroup(LearnerSubmissions)


export {learner1array, learner2array}
