//your code here!

const list = document.getElementById("infi-list");
let count = 1; // keep track of number of items added

// Function to add list items
function addItems(num) {
  for (let i = 0; i < num; i++) {
    const li = document.createElement("li");
    li.textContent = "Item " + count++;
    list.appendChild(li);
  }
}

// Initially add 10 items
addItems(10);

// Add scroll event listener
list.addEventListener("scroll", function () {
  // check if user reached bottom
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2); // add 2 more items
  }
});
