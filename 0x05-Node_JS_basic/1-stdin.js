process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const in_name = process.stdin.read();
  if (in_name) {
    process.stdout.write(`Your name is: ${in_name}`);
  }
});


process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
