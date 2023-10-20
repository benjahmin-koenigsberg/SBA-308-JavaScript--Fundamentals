
### Run
Clone, fork or download this repo and open
```
index.js
```
Function runs with data from
```
sample-data.js
```
Change values of input arrays for different results


### About this app

This assessment from [Per Scholas](https://perscholas.org) gauges my understanding of fundamental JavaScript concepts and your ability to apply these concepts in a practical manner.

### Objectives

- Employ basic JavaScript syntax accurately.

- Implement control flow structures such as conditionals and loops effectively.

- Use arrays and objects to organize and manage data.
Develop functions to create reusable code.

- Utilize loops and iteration to navigate through data collections.

- Implement error handling to manage potential code failures gracefully.

### Instructions

Create a function named getLearnerData() that accepts these values as parameters, in the order listed: (CourseInfo, AssignmentGroup, [LearnerSubmission]), and returns the formatted result, which should be an array of objects as described above.

### Sample input

A CourseInfo object, which looks like this:
```

{
  "id": number,
  "name": string,
}
```
An AssignmentGroup object, which looks like this:
```
{
  "id": number,
  "name": string,
  // the ID of the course the assignment group belongs to
  "course_id": number,
  // the percentage weight of the entire assignment group
  "group_weight": number,
  "assignments": {
  "id": number,
  "name": string,
  // the due date for the assignment
  "due_at": Date string,
  // the maximum points possible for the assignment
  "points_possible": number,
},
}
```
An array of LearnerSubmission objects, which each look like this:
```
{
    "learner_id": number,
    "assignment_id": number,
    "submission": {
      "submitted_at": Date string,
      "score": number
    }
}
```


### Sample output

```
const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0 // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833 // late: (140 - 15) / 150
    }
  ];

```

### A few grading requirements

- Use at least two if/else statements to control program flow. Optionally, use at least one switch statement.

example
```
        if (assignmentObj1.due_at > currentDate) {
            //if so don't add it to the output array
            continue;
        } else {
            objArr.push(assignmentObj1)
        }
```

- Create and/or manipulate arrays and objects.
example
```
    const learner1 = learnersGroup.filter(el => el.learner_id === learnersArr[0])
```

- Use functions to handle repeated tasks.
example
```
function matchAssigmentToCourse(groupId, courseId) {
    if (groupId === courseId) {
        // console.log('Course and Assigment MATCH')
        return true
    }
    else {
        throw new Error("Course and Assigment IDs do not match");
    }
}
```


### Reflections

 **What could you have done differently during the planning stages of your project to make the execution easier?**

> I could have spent more time planning before coding. I also should have read through the grading rubrics first to see the best MVP would have been

**Were there any requirements that were difficult to implement? What do you think would make them easier to implement in future projects?**

> Yes! This whole proect was very difficult. I got stuck parsing the input nested arrays the most efficient way to extract and rebundle the data. In the future, I will consider using imports / exports sooner in dev to at least easily have all the variebles I need seperately

**What would you add to, or change about your application if given more time?**

> If had to do something, it could be cool to build a user interface to enter inputs via the keyboard or csv and / or a UI display for the results data

**Use this space to make notes for your future self about anything that you think is important to remember about this process, or that may aid you when attempting something similar again**

> This project helped me get more comfortable with imports / exports, try / catch blocks and parsing data from nested object arrays. I added a package.json so I could easily add imports / exports, although I believe this was unnecessary... ?
