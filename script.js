let boxTop = 300;

let boxLeft = 700;


let box = document.getElementById("box")


document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (keyName==="ArrowUp"){
      boxTop-=10
      box.style.top = boxTop + "px";
    }
    if (keyName==="ArrowDown"){
      boxTop+=10
      box.style.top = boxTop + "px";
    }
    if (keyName==="ArrowLeft"){
      boxLeft-=10
      box.style.left = boxLeft + "px";
    }
    if (keyName==="ArrowRight"){
      boxLeft+=10
      box.style.left = boxLeft + "px";
    }
  });