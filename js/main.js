function removeTransition(event) {
    if(event.propertyName !== 'transform'){
        return;
    } 
    event.target.classList.remove('playing');
}


function playSound(event){
    const audio = document.querySelector(`audio[data-key="${event.keyCode}" ]`);
    const key = document.querySelector(`div[data-key="${event.keyCode}" ]`);
    if(!audio){
        return;
    } 
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}


const keys = document.querySelectorAll('.key');
for (let i = 0; i < keys.length; i++){
    keys[i].addEventListener('transitionend', removeTransition );
}
window.addEventListener('keydown', playSound);дщдщдщдщдщдщдщдщдщ