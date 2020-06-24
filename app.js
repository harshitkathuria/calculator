let screen = document.getElementById('screen');
let screenValue = '';

let buttons = document.querySelectorAll('button');

console.log(buttons);

buttons.forEach(function(item){
    item.addEventListener('click', function(e){
        let buttonText = e.target.innerText;
        if(buttonText === 'X'){
            buttonText = '*';
            screen.value += buttonText;
        }
        else if(buttonText === 'C'){
            screen.value = ''
        }
        else if(buttonText === '='){

            let text = parseInt(screen.value);
            // console.log(text);
            // if(text === '' || isNaN(text)){
            //     screen.value = '';
            // }
            // else{
                try{
                    eval(screen.value);
                    screenValue = eval(screen.value);
                    screen.value = screenValue;
                }
                catch(err){
                    screen.placeholder = 'Invalid Format';
                    // screen.disabled = true;
                    screen.value = screenValue;
                }
            // }
        }
        else{
            screen.value += buttonText;
        }
    });
})