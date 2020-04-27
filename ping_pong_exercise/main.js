const button = document.querySelectorAll('button');
for(let i = 0; i < button.length; i++){
  button[i].addEventListener("click",pingPong)
}

function pingPong(){

  if(button[0].classList.contains('hidden')){
    button[1].classList.add('hidden');
    button[0].classList.remove('hidden');
  }else {
    button[0].classList.add('hidden');
    button[1].classList.remove('hidden');
  }
}
