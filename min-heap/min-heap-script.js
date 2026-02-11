const array = new Array();  // in JS arraylist is the Linked list  

const heapContainer = document.getElementById("heapContainer"); // display container
const input = document.getElementById("element-input"); //key

const message = document.getElementById("message");

array = Number(input) ;

document.getElementById("build heap").addEventListener("click", build_heap);


// Enter key support; Add to the back of ArrayList
// document.addEventListener('keydown', (event) => { 
//     if (event.key === 'Enter') {
//     const value = input.value.trim();
//     if (value !== "") {
//       add_back();
//     }
//   }
// });


// Add at index 0 and shift others elements if they exist
function build_heap() {
  
  if (array.length === 0) {
    message.textContent = "Please enter Heap values.";
    return;
  }

  array.sort();
  input.value = "";

  for (const i =0; i < array.length; i++)
  {
    renderlinkedlist();
    message.textContent = `Added ${value} to Min Heap.`;
    print("\n") ;
  }
  
}


function renderlinkedlist() {
  heaoContainer.innerHTML = ""; //Clear Whole container and Each time render all elemenst in Array 

  // Empty array msg
  if (array.length === 0) {
    message.textContent = "List is empty.";
    return;
  }

  // Render all items
  array.forEach((item, index) => {
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