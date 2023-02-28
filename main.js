let roundedValue;

let input = document.querySelector('input');

let sign2 = document.querySelector('#sign2');

let sign = document.querySelector('#sign');

document.getElementById("option").onchange = changeListener;

function changeListener(){
    let value = this.value
    console.log(value)
    let text= document.querySelector('#convertedInput');
        if(value === "F"){
        sign.innerHTML = "°C"   
        sign2.innerHTML = "°F"
        text.innerHTML = " ";
          input.addEventListener('input', convertToFarenheit)
          console.log('hi');
        }else if(value === "C"){
            sign.innerHTML = "°F"
            sign2.innerHTML = "°C"
            text.innerHTML = " ";
          input.addEventListener('input', convertToCelcius);
          console.log('hello');
        }
      }


function convertToFarenheit(){
    let value2 = document.querySelector('#convertedInput')
    let value = document.getElementById("input").value;
    if (isNaN(value)){
        value = " ";
    }else{
        value = (value * (9/5)) + 32;
        roundedValue = Math.round(value*10)/10;
    }
    value2.textContent = roundedValue;
}




function convertToCelcius(){
    let value2 = document.querySelector('#convertedInput')
    let value = document.getElementById("input").value;
    if (isNaN(value)){
        value = "";
    }else{
        value = (value - 32) * 5/9;
        roundedValue = Math.round(value*10)/10;
    }
    value2.textContent = roundedValue;
}


