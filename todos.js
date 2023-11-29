const start = document.querySelector("button");

start.addEventListener("click", todoList);

function todoList() {
  let input = prompt("What you want to do?");
  const todosList = [];

  while (input !== "quit" && input !== "q") {
    if (input === "list" || input === "l") {
      console.log("********************");
      for (let i = 0; i < todosList.length; i++) {
        console.log(` ${i} : ${todosList[i]}`);
      }
      console.log("********************");
    } else if (input === "new" || input === "n") {
      const newTodo = prompt("Ok, What do you want to add?");
      todosList.push(newTodo);
      console.log(`${newTodo} added to the list!`);
    } else if (input === "delete" || input === "d") {
      const index = parseInt(prompt("Ok, Enter the index number to delete!"));
      if (index === 0 || index) {
        const deleted = todosList.splice(index, 1);
        console.log(`Ok, deleted ${deleted}!`);
      } else {
        console.log("Ohho, Unknown index! Please write valid index");
      }
    }

    input = prompt("What you want to do?");
  }

  console.log("OK, YOU QUIT THE APP");
}
