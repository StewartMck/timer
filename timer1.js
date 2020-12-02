const timer = function(timers = process.argv.slice(2).filter(num => num >= 1)) {
  if (timers.length < 1) {
    return undefined;
  }
  for (let [index, time] of timers.entries()) {
    if (time > 0 || Number.isInteger(time)) {
      setTimeout(() => {
        process.stdout.write(timers[index + 1] ? '🕗\x07' : '🕗\x07\n');
      }, time);
    } else {
      continue;
    }
  }
};
timer();