const passwordInput= document.querySelector(".password-box input"),
copyicon= document.querySelector(".password-box .bx"),
rangeInput= document.querySelector(".range-box input"),
slidernumber= document.querySelector(".range-box .slider-number"),
generateButton= document.querySelector(".generate-password");

// THIS INCLUDES ALL THE ALPHABETS , NUMBERS AND SYMBOLS
let characters="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm@#$<>?{}[]()_1234567890"


// THIS FUNCTION WILL BE CALLED ON THE PAGE RELOAD ,GENERATE BUTTON CLICKED ,RANGE INPUT SLIDE
const generatePassword =() => {
    let newpassword="";
    // for loop will run until rangeinput value
    for (let i=0; i<rangeInput.value;i++){
        let randomNumbers = Math.floor(Math.random()*characters.length);
        newpassword+=characters[randomNumbers];
    }
    passwordInput.value=newpassword;
};

rangeInput.addEventListener("input",()=>{
    slidernumber.innerText=rangeInput.value;
    generatePassword();
});

// copy passinput's value on copyicon click
copyicon.addEventListener("click",()=>{
    navigator.clipboard.writeText(passwordInput.value);
});


generateButton.addEventListener("click",generatePassword);