const keys = document.querySelector('.grid-container');
const mydisplay = document.querySelector('.text');
const calculator=document.querySelector('.calculator')

keys.addEventListener('click', (event) => {
    const key = event.target;
    const keyvalue = key.textContent;
    let displayvalue = mydisplay.textContent;
    const{type}=key.dataset;
    const {previouskeytype}=calculator.dataset
    let{state}=key.dataset

    // is this a number key ?
    if(type=='number')
    {
        if (displayvalue == '0') {
            mydisplay.textContent = keyvalue;
        }else if( previouskeytype == 'operator' ){
            mydisplay.textContent=keyvalue

        }else{
            mydisplay.textContent = displayvalue + keyvalue;
           
        }
        
        calculator.dataset.previouskeytype='number'
         // is this the point (.) button ?
         if (keyvalue == '.') {
            if (!displayvalue.includes('.')) {
                mydisplay.textContent = displayvalue + keyvalue;
            }
        }
    }
    
    // is this an operator key ?

    if(type=='operator')  
    { 
        calculator.dataset.firstnumber=displayvalue
        calculator.dataset.previouskeytype='operator'
        calculator.dataset.operator=key.dataset.key
       
    }
    calculator.dataset.previouskeytype=type

    if(type=='equal')
    {
        const operator=calculator.dataset.operator
        const firstnum  = parseFloat(calculator.dataset.firstnumber)
        const secondnum=parseFloat(mydisplay.textContent)
        console.log(firstnum,operator,secondnum)
        let result=''
        if(operator=='plus') result= firstnum + secondnum
        if(operator=='minus') result= firstnum - secondnum
        if(operator=='multiply') result= firstnum * secondnum
        if(operator=='divide') result= firstnum/secondnum
        mydisplay.textContent=result

        console.log(result)
    }

     // is this a clear (C) key ?
     if (type == 'number' && state == 'clear') {
        displayvalue = '0';
        calculator.dataset.firstnumber = '';
        calculator.dataset.operator = '';
        calculator.dataset.previouskeytype = '';
        mydisplay.textContent = displayvalue
    }
});