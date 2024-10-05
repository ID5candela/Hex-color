const btns = document.querySelectorAll('.btn');
const body = document.body;

function changeBackground(color) {
  body.className = "";
  switch (color) {
    case "purple":
      body.classList.add('purple');
      break;
    case "blue":
      body.classList.add('blue');
      break;
      case "red":
       body.classList.add('red');
       break;
       case "green":
        body.classList.add('green');
        break;
      console.error('Invalid color:', color);
      
  }
}

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const color = btn.value;
    changeBackground(color);
    console.log(color);
  });
});
