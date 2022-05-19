# Rock Paper Scissors
Rock Paper Scissors project from The Odin Project

Status: Currently in progress. There's barebones UI, but I want to refine it with React if I get the chance. Maybe I could convert this into the Fire Emblem weapon triangle...

## Changelog

**2022-05-15**

- Add barebones UI: buttons to for the player to click their choice
- Add event listener on the container `<div>` of the three buttons, then easily determine which choice was picked from the button's class name
- Refactor and modularize code into functions
  - Create separate functions that only read/update the DOM, and separate functions for the game logic
- Convert all functions to arrow function syntax
- After declaring a winner, the scores automatically reset and the running score list is cleared

**2022-05-13**

- Access objects to quickly select rock, paper, scissors values into its corresponding integer values
- Use `Math.random()` to generate the computer's selection
- Use `switch` and `if` statements to determine the winner in a round
- Use `while` loops to indefinitely loop until either the player or computer reaches a score of 5
- Use template literals to output scores and results into the console
- Use `alert()` and `prompt()` functions to show and receive feedback to the user.
