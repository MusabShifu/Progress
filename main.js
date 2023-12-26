let preButton = document.querySelector('.pre');
let nextButton = document.querySelector('.next');
let prog = 1;
nextButton.addEventListener('click', () => {
   if (prog<3) {
    prog++;
    document.getElementById(`d${prog}`).classList.add('done');
       if (prog==2) {
           preButton.classList.remove('f');
       }
       else if (prog==3) {
           nextButton.classList.add('f');
       }
   }
});
preButton.addEventListener('click', () => {
   if (prog>1) {
    document.getElementById(`d${prog}`).classList.remove('done');
       prog--;
       if (prog == 2) {
           nextButton.classList.remove('f');
       }
       if (prog == 1) {
           preButton.classList.add('f');
       }
    }
    
});