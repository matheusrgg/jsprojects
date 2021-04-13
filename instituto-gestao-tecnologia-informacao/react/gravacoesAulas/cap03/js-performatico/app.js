window.addEventListener('load', start);

const clickArray = [];

function start() {
  const button = document.querySelector('#clickButton');
  button.addEventListener('click', handleButtonClick);
}

function handleButtonClick() {


  clickArray.push(getNewTimestamp());

  console.log(clickArray);
  render();
}

function render() {
  const ul = document.querySelector('#data');

  ul.innerHTML = '';
  let lis = '';

  //item vetor com data e hora
  clickArray.map((item) => {
    lis += `<li>${item}</li>`;
  });

  ul.innerHTML = lis;


}
