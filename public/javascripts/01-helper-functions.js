function sample(array) {
  var random = array[Math.floor(Math.random()*array.length)];
  return random;
}

function elementIncluded(array, element) {
  return array.indexOf(element) > -1;
}

function getLastElement(array) {
  return getLaterElements(array, 1);
}

function getSecondToLastElement(array) {
  return getLaterElements(array, 2);
}

function getLaterElements(array, index) {
  return array[array.length - index];
}

function deleteAt(array, index) {
  array.splice(index, 1);
}