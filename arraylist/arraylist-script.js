const array = new Array();

const arrayContainer = document.getElementById("arrayContainer"); // display container
const input = document.getElementById("array-input"); //key

const message = document.getElementById("message");

document.getElementById("add-to-front").addEventListener("click", add_front);
document.getElementById("add-to-back").addEventListener("click", add_back);

//document.getElementById("add-at-index").addEventListener("click", add_index);
//document.getElementById("remove-index").addEventListener("click", remove_index);

document.getElementById("remove-front").addEventListener("click", remove_front);
document.getElementById("remove-back").addEventListener("click", remove_back);


// Enter key support; Add to the back of ArrayList
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const value = input.value.trim();
    if (value !== "") {
      add_back();
    }
  }
});


// Add at index 0 and shift others elements if they exist
function add_front() {
  const value = input.value.trim();
  
  if (value === "") {
    message.textContent = "Please enter a Key value.";
    return;
  }

  array.unshift(value);
  input.value = "";

  message.textContent = `Added ${value} to the start of ArrayList.`;
  renderArray();
}

// Add at index (array.length-1)
function add_back() 
{
  const value = input.value.trim();

  if (value === "") {
    message.textContent = "Please enter a Key value.";
    return;
  }

  array.push(value);
  input.value = "";

  message.textContent = `Added ${value} to the end of ArrayList.`;
  renderArray();
}

// remove array(0) and shift left 
function remove_front() {
  if (array.length === 0) {
    message.textContent = "ArrayList is empty. Nothing to remove.";
    return;
  }

  const removed = array.shift();
  message.textContent = `Removed ${removed} from front.`;
  renderArray();
}


// remove last available index 
function remove_back() {
 
    if (array.length === 0) {
    message.textContent = "ArrayList is empty. Nothing to remove.";
    return;
  }

  const removed = array.pop();
  message.textContent = `Removed ${removed} from back.`;
  renderArray();
}


function renderArray() {
  arrayContainer.innerHTML = "";

  // Empty array msg
  if (array.length === 0) {
    message.textContent = "ArrayList is empty.";
    return;
  }

  // Render all items
  array.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "array-item"; // Apply Css to the div
    div.textContent = item;
    arrayContainer.appendChild(div);
  });
}