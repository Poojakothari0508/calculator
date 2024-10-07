let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let buttonsArray = Array.from(buttons); //phele node tha tho Array.from se usko array m convert kiye hai aab next step m usko variable m krenge
let string = '';

buttonsArray.forEach(function(btn){
    btn.addEventListener('click',function(event){
        if(event.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1); // substring se ek ek value delete hota h
            display.value= string;
        }else if(event.target.innerHTML == 'AC'){
            string = '';
            display.value = string;
        }else if(event.target.innerHTML == '='){
            string = eval(string); // eval is function for calculation
            display.value = string;
        }else{
            string += event.target.innerHTML; //+= isliye likhe hai taki ek ke badh ek value usme display hota rhe
            display.value= string;
        }
    });

});
