let input = prompt("what would you like to do?");
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log("****************");
        for (let i = 0; i <= todos.length -1; i++){
            console.log(`${i}. ${todos[i]}`);
        }
        console.log("****************");
    }else if (input === 'new'){
        const newTodo = prompt("Add your new task.");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    }else if (input === 'delete'){
        const index = parseInt(prompt("Ok, what is the index of the task to delete?"));
        if (!Number.isNaN(index)){
            const deleted = todos.splice(index, 1);
            console.log(`"${deleted[0]}" deleted`);
        }else{
            console.log("Unknown index!");
        }
    }
    input = prompt("what would you like to do?");
}

console.log("OKAY, YOU QUIT THE APP");