let display = document.getElementById("display");

function appendtoDisplay(Input){
    display.value += Input;
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    try{
    display.value = eval(display.value)
}
catch(error){
    display.value = "Error"
}



}