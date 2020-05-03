(() => {

const carBrands = [
  'BMW',
  'Maserati',
  'Mercedes Benz',
  'Ferrari',
  'Toyata',
  'Honda',
  'Hyundai'
];

const searchElem = document.querySelector('.search');

function selectCarBrand(event)
{
  searchElem.value = event.target.innerText;
  clearResults();
}

function clearResults() {
  const results = document.querySelector('.results');
  if(results)
  {
    document.body.removeChild(results);
  }
}

function createUlElement() {
  const ulElem = document.createElement('ul');
  ulElem.classList.add('results');
  return ulElem;
}

function onInput(event) {
  clearResults();
  const input = event.target.value.toLowerCase();
  const matchedItems = carBrands.filter(car => car.toLowerCase().startsWith(input));
  const ulElem = createUlElement();
  matchedItems.forEach(car => {
    const liElem = document.createElement('li');
    liElem.innerText = car
    liElem.onclick = selectCarBrand;
    ulElem.appendChild(liElem);
  });
  if (matchedItems!==undefined && matchedItems.length>0)
  {
       document.body.appendChild(ulElem);
  }



}
function run() {
searchElem.addEventListener('input',onInput);
document.addEventListener('click',clearResults)
}
run();
})();
