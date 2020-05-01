// selects the input area
let inputContent = document.getElementById("inputValue");

// selects the buttons with numbers
let mathInput = document.querySelectorAll(".mathButton");

//  selects the delete button
let deleteBtn = document.getElementById('delBtn');

// when the C button is clicked it clears the input area
document.getElementById("clearBtn").addEventListener("click", (onClickBtn) => {
  inputContent.value = "";
});

let errorDisplayed = document.getElementById('error');
// event on the equals button
document.getElementById("resultBtn").addEventListener("click", (resultBtn) => {
  var empty = inputContent.value;
  while (empty == '') {
    errorDisplayed.style.display = 'block'; // display the error message in DOM
    inputContent.value = '';
    setTimeout(() => errorDisplayed.remove(), 3000);  // timeout for the error message

    empty++;
  }
  inputContent.value = eval(inputContent.value); // the value inside inputarea is evaluated with the eval() functions that evaluates strings
});

// event on the delete button 
deleteBtn.addEventListener('click', (removeBtn) => {
  // here the slice function deletes the last character in the input area... you can also use the substr function instead of slice.

  inputContent.value = inputContent.value.slice(0, inputContent.value.length - 1);
})

// using a for loop to get all the buttons associated with class ... 
for (var i = 0; i < mathInput.length; i++) {

  // event for displaying values of a button in the input area...
  mathInput[i].addEventListener("click", function buttonContents() {

    inputContent.value += this.value; // the values in the buttons is appended to input ...

  })

}