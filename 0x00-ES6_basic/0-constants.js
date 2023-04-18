// Javascript script that modifies the value of myVar to 333

export const taskFirst = () => {
    var task = 'I prefer const when I can.';
    return task;
}

// get last string
export function getLast() {
  return ' is okay';
}

// get next string
export let taskNext= () => {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}

