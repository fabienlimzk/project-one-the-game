## Project Post Mortem
Post mortems are important to understand about what happened in a project and actively think about what you learned.

Post-mortems are meant to be a blame-less space open to objective conversation about what went well and what could be improved.

Even in the examples below, where tens of millions of dollars could be lost, the best approach is to think through the series of events that led to the outcome.

Large mistakes are almost never the fault of the developer, but of the sytems and processes in place to prevent errors and problems.

[https://github.com/danluu/post-mortems](https://github.com/danluu/post-mortems)
https://blog.codinghorror.com/the-project-postmortem/

### What to Bring
Please answer the following questions. Take at least 30 minutes to prepare.

#### Approach and Process

1. What in my process and approach to this project would I do differently next time?
- Thinking of how I am gonna start with the project first before deciding on what I want to do.

2. What in my process and approach to this project went well that I would repeat next time?
- Starting out with hardcoded board and then change the code to make it dynamic.

--

#### Code and Code Design

1. What in my code and program design in the project would I do differently next time?
- Try to refactor the logic part to make it way a lot shorter. 

2. What in my code and program design in the project went well? Is there anything I would do the same next time?

  For each, please include code examples.
  1. Code snippet up to 20 lines.
  2. Code design documents or architecture drawings / diagrams.

  1. 
  To generate a 2D array for me to input the data of each grid 
  function generateGridData(size) {
    const gridData = new Array(size).fill('').map(element => new Array(size).fill('').map(el => ''));
    return gridData;
  }

  2. 
  [][][][][][][][][][]
  [][][][][][][][][][]
  [][][][][][][][][][]
  [][][][][][][][][][]
  [][][][][][][][][][]
  [][][][][][][][][][]
  [][][][][][][][][][]
  [][][][][][][][][][]
  [][][][][][][][][][]
  [][][][][][][][][][]

#### WDI Unit 1 Post Mortem
1. What habits did I use during this unit that helped me?
- A lot of DOM Manipulation for me to create a dynamic board and replace the background of the grids with images

2. What habits did I have during this unit that I can improve on?
- Time management, kept on procrastinate

3. How is the overall level of the course during this unit? (instruction, course materials, etc.)
- It was a lot okay after change of instructor.