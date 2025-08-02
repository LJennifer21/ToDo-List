let addButton = document.getElementById("item-button");
let removeAll = document.getElementById("remove-all-button");
let itemAdd = document.getElementById("item");

const itemsAdd = (event) => {
    event.preventDefault(); // Prevent form from submitting and refreshing the page
    
    const itemInput = document.getElementById("item");
    const item = itemInput.value; // Get item and remove any extra spaces

    if(!item){ //if there is no text(item added) then it does nothing
        return;
    }

    const newItemDiv = document.createElement("div");
    newItemDiv.classList.add("item");

    // Create the checkbox input
    const newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.classList.add("checkbox");

    // Create the new item <p> element
    const newItem = document.createElement("p");
    newItem.textContent = ` ${item}`;

    const removeButton = document.createElement("button");
    removeButton.type='button';
    removeButton.classList.add("remove-button");

    removeButton.textContent = "Remove";
    //Remove all the items and check boxes
    removeAll.addEventListener("click", () => {
            newItem.remove(); //removes all the items
            newCheckbox.remove();// removes all the check boxes
            
        });

    
    newItemDiv.style.display = 'flex';
    newItemDiv.style.alignItems = 'center';
    removeButton.style.display ='none';
 

    removeButton.addEventListener("click", ()=>{
        newItem.remove(); 
        newCheckbox.remove(); 
        removeButton.remove();
    });
    
    newItemDiv.addEventListener("mouseenter", () => {
        removeButton.style.display = 'inline-block';  // Show the remove button on hover
        removeButton.style.borderRadius = '5px';
        removeButton.style.backgroundColor ='rgb(191, 191, 153)';
        newItem.style.paddingRight='10px';
    });

    newItemDiv.addEventListener("mouseleave", () => {
        removeButton.style.display = 'none';  // Hide the remove button when not hovering
    });





    newCheckbox.addEventListener("change", () => {
        newItem.style.textDecoration = newCheckbox.checked ? "line-through" : "none";
    });
    //Append the check and new item
    newItemDiv.appendChild(newCheckbox);
    newItemDiv.appendChild(newItem);
    newItemDiv.appendChild(removeButton);
    
    

    // Find the div that holds the list of items and append the new item
    const itemsDiv = document.querySelector(".items");
    itemsDiv.appendChild(newItemDiv);

    // Clear the input field for the next item
    itemInput.value = "";
};



//removeItem.addEventListener("click", itemRemove);
addButton.addEventListener("click", itemsAdd);

//adding the to be able to add an item using the enter key on a keyboard
itemAdd.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        itemsAdd(event); // Reuse the same function as the add button
    }
});








