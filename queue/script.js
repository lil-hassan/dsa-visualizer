const queue = [];

const sizeInput = document.getElementById("queue-size");
const queueContainer = document.getElementById("queueContainer");
const input = document.getElementById("queue-input");
const message = document.getElementById("message");

document.getElementById("enqueue").addEventListener("click", enqueue);
document.getElementById("dequeue").addEventListener("click", dequeue);
document.getElementById("peek").addEventListener("click", peek);



// Press Enter to enqueue
document.getElementById("queue-input").addEventListener("keydown", (event)=>{
  if(event.key==="Enter"){
    event.preventDefault();
    enqueue();
  }
});

// Shift focus of cursor to input value when pressed enter 
document.getElementById("queue-size").addEventListener("keydown", (event)=>{
  if(event.key==="Enter"){
    event.preventDefault();
    input.focus();
  }
});

// Press Delete to Dequeue
if(document.addEventListener("keydown",(event)=>{
    if(event.key==="Delete")
    {
      event.preventDefault();
      dequeue();
    }
}));



function enqueue() {
  const value = input.value.trim();
  const maxSize = Number(sizeInput.value);

  if (value === "") {
    message.textContent = "Please enter a value.";
    return;
  }

  if (queue.length >= maxSize) {
    message.textContent = "Queue Overflow! Cannot enqueue.";
    return;
  }

  queue.push(value);
  input.value = "";

  // Lock queue size after first enqueue
  sizeInput.disabled = true;

  message.textContent = `Enqueued ${value} into the queue.`;
  renderQueue();
}

function dequeue() {
  if (queue.length === 0) {
    message.textContent = "Queue Underflow! Queue is empty.";
    return;
  }

  const removed = queue.shift();
  message.textContent = `Dequeued ${removed} from the queue.`;
  renderQueue();

  // Unlock size input if queue becomes empty
  if (queue.length === 0) {
    sizeInput.disabled = false;
  }
}

function peek() {
  if (queue.length === 0) {
    message.textContent = "Queue is empty. Nothing to peek.";
    return;
  }

  message.textContent = `Front element is ${queue[0]}.`;
}

function renderQueue() {
  queueContainer.innerHTML = "";

  queue.forEach(item => {
    const div = document.createElement("div");
    div.className = "queue-item";
    div.textContent = item;
    queueContainer.appendChild(div);
  });
}
