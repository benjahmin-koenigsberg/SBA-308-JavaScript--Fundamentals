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


function getAssigmentInfo(ag){
    const assignments = ag.assignments
    console.log(assignments)
    const assignmentsArray = []
    assignments.map(element => {
        const obj = {};
        obj.id = element.id
        obj.points_possible = element.points_possible;
        assignmentsArray.push(obj)
    });
    console.log(assignmentsArray)
   // return results
}

getAssigmentInfo(AssignmentGroup)



