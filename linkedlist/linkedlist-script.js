const array = new Array();  // in JS arraylist is the Linked list  

const linkedlistContainer = document.getElementById("linkedlistContainer"); // display container
const input = document.getElementById("linkedlist-input"); //key

const message = document.getElementById("message");



document.getElementById("add-to-front").addEventListener("click", add_front);
document.getElementById("add-to-back").addEventListener("click", add_back);

//document.getElementById("add-at-index").addEventListener("click", add_index);
//document.getElementById("remove-index").addEventListener("click", remove_index);

document.getElementById("remove-front").addEventListener("click", remove_front);
document.getElementById("remove-back").addEventListener("click", remove_back);


//Head --> NUll
renderArrow() ;


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

  message.textContent = `Added ${value} to the start of Linked-List.`;
  renderlinkedlist();
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

  message.textContent = `Added ${value} to the end of Linked-List.`;
  renderlinkedlist();
}

// remove array(0) and shift left 
function remove_front() {
  if (array.length === 0) {
    message.textContent = "List is empty. Nothing to remove.";
    return;
  }

  const removed = array.shift();
  message.textContent = `Removed ${removed} from front.`;
  renderlinkedlist();
}


// remove last available index 
function remove_back() {
 
    if (array.length === 0) {
    message.textContent = "List is empty. Nothing to remove.";
    return;
  }

  const removed = array.pop();
  message.textContent = `Removed ${removed} from back.`;
  renderlinkedlist();
}


function renderlinkedlist() {
  linkedlistContainer.innerHTML = ""; //Clear Whole container and Each time render all elemenst in Array 

  // Empty array msg
  if (array.length === 0) {
    renderArrow() ;
    message.textContent = "List is empty.";
    return;
  }

  // Render all items
  array.forEach((item, index) => {
    renderArrow() ;
    const div = document.createElement("div");
    div.className = "linkedlist-item"; // Apply Css to the div 
    div.textContent = item;
    linkedlistContainer.appendChild(div);
  });
}

function renderArrow(){
    const div_arrow = document.createElement("div");
    div_arrow.className = "linkedlist-item-arrow"; // Apply Css to the div 
    div_arrow.textContent = "-->";
    linkedlistContainer.appendChild(div_arrow);
}