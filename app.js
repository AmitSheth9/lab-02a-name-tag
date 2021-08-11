
console.log("validate");
//allow user to input name for nametag
//select user input when button is clicked
//designate location you want to add user input to
//display textcontent of user input in designated location


const userInput = document.getElementById('entername');
console.log(userInput.value);
const myButton = document.getElementById('mybutton');
console.log(myButton);
const namelocation = document.getElementById('named');
console.log(namelocation.textContent)
myButton.addEventListener('click', () => { 
    namelocation.textContent = userInput.value;
});


