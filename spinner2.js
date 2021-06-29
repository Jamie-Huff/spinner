let spin = function (array, time) {
  array.forEach((elem) => {
    setTimeout(() => {
      process.stdout.write(`\r${elem}    `);
    }, time += 200);
  })
  setTimeout(() => {
      process.stdout.write('\n');
  }, time)
}
spin(["|", "/", "-", "\\", "|", "/", "-", "\\", "|"], 0)
