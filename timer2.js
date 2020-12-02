const stdin = process.stdin;
const stdout = process.stdout;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const timer = () => {

  // Using Raw Mode - CTRL+C not available, use own kill switch
  stdin.on('data', (option) => {
    if (option === '\u0003') {
      writeToConsole('\rThanks for using me, ciao!\n');
      process.exit();
    }

    if (option === 'b') {
      writeToConsole('\r🕗\x07');
    } else if (Number(option) > 0 && Number(option) < 10) {
      writeToConsole(`\rSetting timer for ${option} seconds...`);
      setTimeout(() => {
        writeToConsole('\r🕗\x07');
      }, Number(option) * 1000);
    } else {
      writeToConsole('\rINVALID INPUT: ENTER 1-9 or b');
    }
  });
};

const writeToConsole = (write) => {
  stdout.clearLine();
  stdout.write(write);
};

timer();