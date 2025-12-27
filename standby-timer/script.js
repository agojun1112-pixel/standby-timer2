const clock = document.querySelector('.clock');
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12];

numbers.forEach(num => {
  const el = document.createElement('div');
  el.classList.add('number');
  el.innerText = num;

  const angle = (num - 3) * (Math.PI * 2 / 12);  // 12時を上に
  const radius = clock.offsetWidth / 2 - 20;      // 時計半径から余白20px
  const x = clock.offsetWidth / 2 + radius * Math.cos(angle);
  const y = clock.offsetHeight / 2 + radius * Math.sin(angle);

  el.style.left = x + 'px';
  el.style.top = y + 'px';

  clock.appendChild(el);
});
