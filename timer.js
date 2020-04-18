const waitTime = 5000;
const waitInterval = 500;
let currettTime = 0;

const incTime = () => {
    currettTime += waitInterval;
    const p = Math.floor((currettTime / waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}%`)
};

console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log('done');
};

const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime)