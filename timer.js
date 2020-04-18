const waitTime = 3000;
const waitInterval = 500;
let currettTime = 0;

const incTime = () => {
    currettTime += waitInterval;
    console.log(`waiting ${currettTime / 1000 } seconds`);
};

console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => {
    clearInterval(interval);
    console.log('done')
};

const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime)