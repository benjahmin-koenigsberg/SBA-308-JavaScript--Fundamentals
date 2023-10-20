import { LearnerSubmissions } from "../sample-data.js";

//initialize empty array;
let learner1array;
let learner2array;
//let learners = [];

//seperate learers from learner group function
function seperateLearnersFromGroup(learnersGroup) {

    const learnersArr = []

    learnersGroup.forEach(el => {
        if (!learnersArr.includes(el.learner_id))
            learnersArr.push(el.learner_id)
    })
    //learner 1
    const learner1 = learnersGroup.filter(el => el.learner_id === learnersArr[0])

    // const learner = {
    //     1: learnersGroup.filter(el => el.learner_id === learnersArr[0]),
    //     2: learnersGroup.filter(el => el.learner_id === learnersArr[1]),
    // }

    //learner 2
    const learner2 = learnersGroup.filter(el => el.learner_id === learnersArr[1])

    //console.log(learner1)
    learner1array = learner1
    learner2array = learner2


    return
}

export { seperateLearnersFromGroup }
export { learner1array, learner2array }
