// Stack data structure
const stack = [];

// DOM elements
const sizeInput = document.getElementById("stack-size");
const stackContainer = document.getElementById("stackContainer");
const input = document.getElementById("stack-input");
const message = document.getElementById("message");

// Buttons
document.getElementById("push").addEventListener("click", push);
document.getElementById("pop").addEventListener("click", pop);
document.getElementById("top").addEventListener("click", showTop);

// Press Enter to push
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    push();
  }
});

// Press Enter on size → move to value input
sizeInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    input.focus();
  }
});

// Press Delete to pop
document.addEventListener("keydown", (event) => {
  if (event.key === "Delete") {
    event.preventDefault();
    pop();
  }
});

// PUSH operation
function push() {
  const value = input.value.trim();
  const maxSize = Number(sizeInput.value);

  if (!maxSize || maxSize <= 0) {
    message.textContent = "Please set stack size first.";
    return;
  }

  if (value === "") {
    message.textContent = "Please enter a value.";
    return;
  }

  if (stack.length >= maxSize) {
    message.textContent = "Stack Overflow! Cannot push.";
    return;
  }

  stack.push(value);
  input.value = "";
  sizeInput.disabled = true;

  message.textContent = `Pushed ${value} into the stack.`;
  renderStack();
}

// POP operation
function pop() {
  if (stack.length === 0) {
    message.textContent = "Stack Underflow! Stack is empty.";
    return;
  }

  const removed = stack.pop();
  message.textContent = `Popped ${removed} from the stack.`;
  renderStack();

  if (stack.length === 0) {
    sizeInput.disabled = false;
  }
}

// TOP operation
function showTop() {
  if (stack.length === 0) {
    message.textContent = "Stack is empty.";
    return;
  }

  message.textContent = `Top element is ${stack[stack.length - 1]}.`;
}

// Render stack visually
function renderStack() {
  stackContainer.innerHTML = "";

  stack.forEach(item => {
    const div = document.createElement("div");
    div.className = "stack-item";
    div.textContent = item;
    stackContainer.appendChild(div);
  });
}
