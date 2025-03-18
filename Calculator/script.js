const display=document.getElementById("display");
const buttons=document.querySelectorAll(".buttons button");
buttons.forEach(
    element=>{
        element.addEventListener('click',()=>{
            const val=element.textContent;
            if(val==="DEL"){
                display.textContent=display.textContent.slice(0,-1) || 0;
            }else if(val==="RESET"){
                display.textContent="0";
            }else if(val==="="){
                try{
                    display.textContent=eval(display.textContent.replace('/x/g','*'));
                }catch{
                    display.textContent="Error";
                }
            }else{
                if(display.textContent==="0"){
                    display.textContent=val;
                }else{
                    display.textContent+=val;
                }
            }
        });
 });