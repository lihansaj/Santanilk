function getOption() {
    selectElement = document.querySelector('#room');
    output = selectElement.options[selectElement.selectedIndex].text;
    output2 = selectElement.options[selectElement.selectedIndex].value;
    document.querySelector('.output').textContent = output;
    document.querySelector('.output2').textContent = output2;
}
function myFunction() {
    var x = document.getElementById("days").value;
    document.getElementById("demo").innerHTML = x;
}
function myFunctionr() {
    var x = document.getElementById("ro").value;
    document.getElementById("demo2").innerHTML = x;
}
function getOption2() {
    selectElement = document.querySelector('#extra');
    output4 = selectElement.options[selectElement.selectedIndex].text;
    output5 = selectElement.options[selectElement.selectedIndex].value;
    document.querySelector('.output4').textContent = output4;
    document.querySelector('.output5').textContent = output5;
}
function getOption3() {
    selectElement = document.querySelector('#occ');
    output6 = selectElement.options[selectElement.selectedIndex].value;
    document.querySelector('.output6').textContent = output6;
}
function getOption4() {
    selectElement = document.querySelector('#meal');
    output7 = selectElement.options[selectElement.selectedIndex].text;
    output8 = selectElement.options[selectElement.selectedIndex].value;
    document.querySelector('.output7').textContent = output7;
    document.querySelector('.output8').textContent = output8;
}

function getOption5() {
    selectElement = document.querySelector('#meal');
    output8 = selectElement.options[selectElement.selectedIndex].value;
    selectElements = document.querySelector('#occ');
    output6 = selectElements.options[selectElements.selectedIndex].value;
    result9=output8*output6;
    document.querySelector('.result9').textContent = result9;
    
}

function getOption6() {
    selectElement = document.querySelector('#room');
    var x = document.getElementById("days").value;
    var y = document.getElementById("ro").value;
    result10=output2*x;
    z=result10*y;
    document.querySelector('.result10').textContent = z;
    
}
function getOption7() {
    selectElement = document.querySelector('#room');
    var x = document.getElementById("days").value;
    var y = document.getElementById("ro").value;
    result10=output2*x;
    z=result10*y;
    selectElementn = document.querySelector('#meal');
   output8 = selectElementn.options[selectElementn.selectedIndex].value;
  selectElements = document.querySelector('#occ');
    output6 = selectElements.options[selectElements.selectedIndex].value;
    result9=output8*output6;
    selectElemente = document.querySelector('#extra');
    output5 = selectElemente.options[selectElemente.selectedIndex].value;
    bb=output5*1;
    result12=z+result9+bb;
    document.querySelector('.result12').textContent = result12;
    

 
}
/*function someFunc() {
    myFunction();
    getOption();
    getOption2();
    getOption3() ;
    getOption4();
    getOption5();
    getOption6();
    getOption7();
   

}
/*function newChoc(){
all_items_button.forEach(elt => elt.addEventListener('click', () => {
    addItem(elt.getAttribute('id'), elt.getAttribute('result12'))
    showItems()
  }))
}
  function someFunc2() {
    newChoc();
  }*/

/*function final(){
    selectElement = document.querySelector('#room');
    var x = document.getElementById("days").value;
    for (var i = 0; i <10; i++){
    total=output2*x;
    document.querySelector('.total').textContent = total;
    }
        


}
function reserve(){
    final();
}*/
function addTheValue(secondValue) {
    var fValue = document.getElementById("firstValue");
    firstValue.innerHTML = parseInt(fValue.innerHTML) +
    parseInt(secondValue);
}






function getOptionnew() {
    document.querySelector('.result12').textContent =null;
    document.querySelector('.result10').textContent = null;
    document.querySelector('.result9').textContent = null;
    document.querySelector('.output7').textContent = null;
    document.querySelector('.output8').textContent = null;
    document.querySelector('.output6').textContent = null;
    document.querySelector('.output4').textContent = null;
    document.querySelector('.output5').textContent = null;
    document.querySelector('.output').textContent = null;
    document.querySelector('.output2').textContent = null;
    document.getElementById("demo").innerHTML = null;
    document.getElementById("demo2").innerHTML = null;
}

function reserve(){
    addTheValue(result12);
    getOptionnew();
    myFunctionnew();
}


function someFunc() {
    myFunction();
    myFunctionr();
    getOption();
    getOption2();
    getOption3() ;
    getOption4();
    getOption5();
    getOption6();
    getOption7();
  
   

}

/*function changeText() {

    var b1 = document.getElementById('b1');


    if(b1.onclick="changeText();") {
        document.getElementById('pText').innerHTML = "Thank you for choosing Santani! We'll you'll have a pleasnt stay";
    }

  
}*/

function myFunctionnew() {
    alert("Thank you for choosing Santani! Have a pleasant Stay. We hope to see you soon..........");
  }

  function addFav() {
    SaveToLocal();
  }

  function favRes() {
 
    myFunction();
    myFunctionr();
    getOption();
    getOption2();
    getOption3() ;
    getOption4();
    getOption5();
    getOption6();
    getOption7();
  }



  function loyal() {
   
    var points = 0;
     var num = document.getElementById("ro").value;

    if (num >=3) {
      points = num * 20;

    }
    else{
        points = 0;
    }
    document.querySelector('.lo').textContent="You have earnt"+" "+points+" "+"points!";
   // document.getElementById("lo").innerHTML = "you have earnt"+j;//
  }

  
    