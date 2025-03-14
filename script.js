const currentOperation = document.querySelector('#current-op');
const previousOperation = document.querySelector('#previous-op');

let left = null;
let right = null;
let operacao = null;


function simbolos(value) {
    if(left) {
        operacao = value;
        previousOperation.innerHTML = leftSide + operator;
        currentOperation.innerHTML = "";
    }     
}


function numbers(num){
    currentOperation.innerHTML += num;

    if (!operacao){
        left=currentOperation.innerHTML;
    }
    else{
        right=currentOperation.innerHTML;
    }
}

function resultado (){
    if(right){
        let s;
        switch(operacao){
            case'+':
                s=Number(left)+Number(right);
            break;

            case'-':
                s=Number(left)-Number(right);
            break;

            case'*':
                s=Number(left)*Number(right);
            break;

            case'/':
                if(right==0){
                s="Não é possível dividir por 0";
                }
                else{
                    s=Number(left)/Number(right);
                }
                
                case'%':
                    s=Number(left)/100;
                break;

                
            }
            
            
      
        if(s === undefined) {
            s = "";
        }
        currentOperation.innerHTML = s;
        previousOperation.innerHTML = left + operacao + rigth + " =";
        left = s;
    
        }
        
    
}
    
    function clear(){
        currentOperation.innerHTML ="";
        left= null;
        right=null;
        operacao=null;

    }

    function back() {
        let apagar = currentOperation.innerHTML
        currentOperation.innerHTML = apagar.substring(0, apagar.length - 1);
    }