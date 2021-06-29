let time = 100
setTimeout(() => {
  process.stdout.write('\r|   ');
}, time);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, (time =+ 200));

setTimeout(() => {
  process.stdout.write('\r-   ');
}, (time += 200));

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, (time += 200));;

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r|   '); 
}, (time += 200));;

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r/   '); 
}, (time += 200));;

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r-   '); 
}, (time += 200));;

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, (time += 200));;

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r|   ');
}, (time += 200));;

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\n'); 
}, (time += 200));;



