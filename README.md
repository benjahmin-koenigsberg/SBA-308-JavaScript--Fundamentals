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

### A few grading requirements

- Use at least two if/else statements to control program flow. Optionally, use at least one switch statement.
- Create and/or manipulate arrays and objects.
- Use functions to handle repeated tasks.
- Program outputs processed data as described above. Partial credit will be earned depending on the level of adherence to the described behavior.
- Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).

### Reflections

 **What could you have done differently during the planning stages of your project to make the execution easier?**

> I could have spent more time planning before coding. I also should have read through the grading rubrics first to see the best MVP would have been

**Were there any requirements that were difficult to implement? What do you think would make them easier to implement in future projects?**

> Yes! This whole proect was very difficult. I got stuck parsing the input nested arrays the most efficient way to extract and rebundle the data. In the future, I will consider using imports / exports sooner in dev to at least easily have all the variebles I need seperately

**What would you add to, or change about your application if given more time?**

> If had to do something, it could be cool to build a user interface to enter inputs via the keyboard or csv and / or a UI display for the results data

**Use this space to make notes for your future self about anything that you think is important to remember about this process, or that may aid you when attempting something similar again**

> This project helped me get more comfortable with imports / exports, try / catch blocks and parsing data from nested object arrays. I added a package.json so I could easily add imports / exports, although I believe this was unnecessary... ?
