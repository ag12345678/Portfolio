const audio = document.querySelector('audio');

// Selecting the html tags we want to use
    const keys = document.querySelectorAll('.keys');
    const key = document.querySelector('key');



    // Creating the functions here
    function onKeyPress(e) {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
      key.classList.add('playing');
      audio.play();
    }

    
    function onClick (e){
      // gets the HTML element with the letter we click
      const audio = document.querySelector(`audio[data-letter="${e.target.childNodes[0].nodeValue}"]`);
      const key = document.querySelector(`div[data-letter="${e.target.childNodes[0].nodeValue}"]`);
      key.classList.add('playing');
      audio.play();
    }

    // Creating functions
    function endSound(e) {
      e.target.classList.remove('playing');
    }


    // Adding event listeners and connecting them to the functions
    keys.forEach(function (key) {
      return key.addEventListener("transitionend", endSound);
    })

    window.addEventListener('keydown', onKeyPress);
    // window.addEventListener('ontouchstart', ontouchtest );

    keys.forEach(function (key) {
      key.addEventListener('click', onClick);
    })
    
    
   