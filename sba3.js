
const LearnerSubmissions = [
    {
        learner_id: 125,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-25",
            score: 47
        }
    },
    {
        learner_id: 125,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-02-12",
            score: 150
        }
    },
    {
        learner_id: 125,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-01-25",
            score: 400
        }
    },
    {
        learner_id: 132,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-24",
            score: 39
        }
    },
    {
        learner_id: 132,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-03-07",
            score: 140
        }
    }
];

function getStudentScores(lg) {

const learnersArr = []
    lg.map((el)=>{
        const obj = {};
            obj.id = el.learner_id;
            obj.assignment_id = el.assignment_id
            obj.score = el.submission.score
        learnersArr.push(obj)
    })
return learnersArr;
}


console.log(getStudentScores(LearnerSubmissions))



const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        {
            id: 1,
            name: "Declare a Variable",
            due_at: "2023-01-25",
            points_possible: 50
        },
        {
            id: 2,
            name: "Write a Function",
            due_at: "2023-02-27",
            points_possible: 150
        },
        {
            id: 3,
            name: "Code the World",
            due_at: "3156-11-15",
            points_possible: 500
        }
    ]
};






function getAssigmentInfo(ag) {
    const assignments = ag.assignments
    //console.log(assignments)
    const assignmentsArray = []
    assignments.map(element => {
        const obj = {};
        obj.id = element.id
        obj.points_possible = element.points_possible;
        assignmentsArray.push(obj)
    });
    console.log(assignmentsArray)
    return assignmentsArray
}


function combineData(ag, lg){
    const assignments = ag.assignments

    const result = [...assignments]
    //console.log(getStudentScores(LearnerSubmissions))
   // console.log(result)
}


getAssigmentInfo(AssignmentGroup)
//combineData(AssignmentGroup, LearnerSubmissions)
//console.log(getAssigmentInfo(AssignmentGroup), getStudentScores(LearnerSubmissions))


const obj = {
    learnerId: 125,
    assignments: [
        { id: 1, score: 100, possibleScore: 100, avg: 100 },
        { id: 2, score: 100, possibleScore: 100, avg: 100 },
        { id: 3, score: 100, possibleScore: 100, avg: 100 }
    ],
    }


const student1 = LearnerSubmissions.filter(el=>el.learner_id === 125)
