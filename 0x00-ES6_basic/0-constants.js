// task 0. Keep everything together!

export function taskFirst() {
    const task = 'I prefer const when I can.';
    return task;
}

// get last part of the string
export function getLast() {
    return ' is okay';
}

// get the whole string
export function taskNext() {
    let combination = 'But sometimes let';
    combination += getLast();
  
    return combination;
}