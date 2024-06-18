const readline = require('readline');

const line = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

line.question('Welcome to Holberton School, what is your name?\n', (msg) => {
  // Print the message
  console.log(`Your name is: ${msg}`);

  // Close the readline interface
  line.close();
});

// Handle the 'close' event
line.on('close', () => {
  console.log('This important software is now closing\n');
  process.exit(0);
});
