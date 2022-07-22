export const paintCards = () => {
  const arr = [...document.getElementsByClassName('item')];
  arr.map((value, index) => {
    if (index % 2 === 0) return (value.style.backgroundColor = 'red');
  });
};

export const findElement = () => {
  const arr = document.getElementsByClassName('item');
  let elem = document.querySelector('li');

  for (let i = 0; i < arr.length; i++) {
    if (elem.classList.contains('likedItem')) {
      elem.style.backgroundColor = 'blue';
    } else {
      elem = elem.nextElementSibling;
    }
  }
};
