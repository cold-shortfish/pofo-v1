/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints in the browser's dev tools console
console.log("coded with sweat and <3");

// play sound on click
function playSound(taste) {
  document.getElementById(taste).play();
};

onclick="document.getElementByClassName('text').style.display = (document.getElementByClassName('text').style.display != 'none') ? 'none' : 'inline';"

// transition-fade
window.onload = () => {
    const anchors = document.querySelectorAll('a:not(.taste-sound)');
    const transition_el = document.querySelector('.transition');
  
    setTimeout(() => {
      transition_el.classList.remove('is-active');
    }, 500);
  
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
  
      anchor.addEventListener('click', e => {
        e.preventDefault();
        let target = e.currentTarget.href;
  
        console.log(transition_el);
  
        transition_el.classList.add('is-active');
  
        console.log(transition_el);
  
        setInterval(() => {
          window.location.href = target;
        }, 500);
      })
    }
  }
//draggable
 $(function() {
            $(".draggable").draggable({
            });
          });
