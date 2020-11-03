const args = process.argv.slice(2);
const timerList = args.sort((a, b) => {return a - b});

for (alarm of timerList) {
  if (typeof alarm === 'number' || alarm > 0) {
    let notif = alarm;
    setTimeout(() => {
      process.stdout.write("beep: " + notif + '\x07' + "\n");
    }, alarm * 1000);
  } else if (alarm === NaN) {
    break;
  }
}