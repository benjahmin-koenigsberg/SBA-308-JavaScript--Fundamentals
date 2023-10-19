## About this app

This assessment from [Per Scholas](https://perscholas.org) gauges my understanding of fundamental JavaScript concepts and your ability to apply these concepts in a practical manner.

### Objectives
Employ basic JavaScript syntax accurately.
Implement control flow structures such as conditionals and loops effectively.
Use arrays and objects to organize and manage data.
Develop functions to create reusable code.
Utilize loops and iteration to navigate through data collections.
Implement error handling to manage potential code failures gracefully.

### Instructions

You will create a script that gathers data, processes it, and then outputs a consistent result as described by a specification. This is a very typical situation in industry, and this particular scenario has been modified from a real application. The data you will use will be provided to you.

### Sample output

```

{
    // the ID of the learner for which this data has been collected
    "id": number,
    // the learner’s total, weighted average, in which assignments
    // with more points_possible should be counted for more
    // e.g. a learner with 50/100 on one assignment and 190/200 on another
    // would have a weighted average score of 240/300 = 80%.
    "avg": number,
    // each assignment should have a key with its ID,
    // and the value associated with it should be the percentage that
    // the learner scored on the assignment (submission.score / points_possible)
    <assignment_id>: number,
    // if an assignment is not yet due, it should not be included in either
    // the average or the keyed dictionary of scores
}

```
