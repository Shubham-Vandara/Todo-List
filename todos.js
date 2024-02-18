const start = document.querySelector("button");

start.addEventListener("click", todoList);

// TODO LIST

function todoList() {
  let input = prompt("What would you like to do?");
  // ARRAY (for store the todos)
  const todoList = [];

  // QUIT FEATURE (IF USER TYPE Q OR QUIT THEN WHILE LOOP IS FALSE) AND OUT OF THE LOOP
  while (input !== "quit" && input !== "q") {
    // NEW FEATURE
    if (input === "new" || input === "n") {
      const newTodo = prompt("Ok, What would you like to Add?");
      todoList.push(newTodo);
      console.log(`${newTodo} added to the list.`);
    } // lIST FEATURE
    else if (input === "list" || input === "l") {
      if (!todoList.length) {
        console.log("Your list is empty, Kindly add a todo");
      } else {
        console.log("************");
        for (let i = 0; i < todoList.length; i++) {
          console.log(`${i}: ${todoList[i]}`);
        }
        console.log("************");
      }
    } // DELETE FEATURE
    else if (input === "delete" || input === "d") {
      const index = parseInt(prompt("Enter the index number to delete"));
      if (!todoList.length) {
        console.log("Your list is empty, So you can't delete our todo");
      } // Number.isNaN(37); // false
      else if (!Number.isNaN(index)) {
        let removeArrayElement = todoList.splice(index, 1);
        // SPLICE GIVE A ARRAY RETURN IF THE INDEX IS UNKNOWN THEN GIVE US UNDEFINED VALUE
        if (removeArrayElement[0] === undefined) {
          console.log("Unknown Index! , Kindly Put Right Index");
        } else {
          console.log(`Ok , Deleted ${removeArrayElement[0]}`);
        }
      } else {
        console.log("Unknown Index!");
      }
    }

    input = prompt("What would you like to do?");
  }
  console.log("You Quit The App! Thanks For Using :)");
}
