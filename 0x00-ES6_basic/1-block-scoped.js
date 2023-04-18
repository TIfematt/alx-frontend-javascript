
// modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.

export default function taskBlock(trueOrFalse) {
    var task = false;
    var task2 = true;
  
    if (trueOrFalse) {
       let task = true;
       let task2 = false;
    }
  
    var result = [task, task2];

    return result;
}

console.log(taskBlock(true));
console.log(taskBlock(false));