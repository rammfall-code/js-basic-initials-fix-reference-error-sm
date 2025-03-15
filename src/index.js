function askInfo(message) {
  let name;

  do {
    name = prompt(message);

    if (name === null) {
      return null;
    }
  } while (name.trim() === '' || /\d/.test(name));

  return name;
}

function askInfoNumber(message) {
  let number;

  do {
    number = prompt(message);

    if (number === null) {
      return null;
    }
  } while (isNaN(number) || number.trim() === '');

  return +number;
}

const name = askInfo('Enter your name');

if (name === null) {
  alert('you cancelled');
} else {
  const age = askInfoNumber('Enter your age');
  if (age === null) {
    alert('you cancelled');
  } else {
    alert(`Hi, ${name}. Your age is ${age}`);
  }
}
