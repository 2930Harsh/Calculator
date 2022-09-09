
let string = ""
let mstring = ""

let buttons = document.querySelectorAll('.btn');

Array.from(buttons).forEach(button=>{
    button.addEventListener('click',(e)=>{

        if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('.input').value = string;
        }
        else if(e.target.innerHTML == "M+"){
            if(mstring==""){
                mstring = eval(string);
                string = "";
                document.querySelector('.input').value = string;
            }
            else{
                string = string + "+" + mstring;
                string = eval(string);
                mstring = "";
                document.querySelector('.input').value = string;
            }
        }
        else if(e.target.innerHTML == "M-"){
            if(mstring==""){
                mstring = eval(string);
                string = "";
                document.querySelector('.input').value = string;
            }
            else{
                mstring = mstring + "-" + string;
                string = eval(mstring);
                mstring = "";
                document.querySelector('.input').value = string;
            }
        }
        else if(e.target.innerHTML == "X"){
            string += '*';
            document.querySelector('.input').value = string;

        }
        else if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector('.input').value = string;
            string = "";
        }
        else{
            string += e.target.innerHTML;
            document.querySelector('.input').value = string;
        }
        console.log(string);

    })
})