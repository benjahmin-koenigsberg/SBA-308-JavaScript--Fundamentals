import { LearnerSubmissions as LearnerSubmissions } from "./sample-data";


// The provided learner submission data.
// const LearnerSubmissions = [
//     {
//         learner_id: 125,
//         assignment_id: 1,
//         submission: {
//             submitted_at: "2023-01-25",
//             score: 47
//         }
//     },
//     {
//         learner_id: 125,
//         assignment_id: 2,
//         submission: {
//             submitted_at: "2023-02-12",
//             score: 150
//         }
//     },
//     {
//         learner_id: 125,
//         assignment_id: 3,
//         submission: {
//             submitted_at: "2023-01-25",
//             score: 400
//         }
//     },
//     {
//         learner_id: 132,
//         assignment_id: 1,
//         submission: {
//             submitted_at: "2023-01-24",
//             score: 39
//         }
//     },
//     {
//         learner_id: 132,
//         assignment_id: 2,
//         submission: {
//             submitted_at: "2023-03-07",
//             score: 140
//         }
//     }
// ];




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


    //learner1.forEach(el=>console.log(el.submission))
    //console.log(learner1)
    learner1array = learner1
    learner2array = learner2
    // learnersArr[0] = learner1;
    // learnersArr[1] = learner2;

    return ;

}

seperateLearnersFromGroup(LearnerSubmissions)
console.log(learner2array)
