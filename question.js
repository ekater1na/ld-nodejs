// process.stdout.write('Hello ');
// process.stdout.write('Katia \n');

const questions = [
    "What is your name?",
    "What would you be doing?",
    "What is you preffered programming language?"
];

const ask = (i=0) => {
    process.stdout.write(`\n ${questions[i]}`);
    process.stdout.write(` > `)
};

ask();

const answer = [];
process.stdin.on('data', data => {
    answer.push(data.toString().trim());
    if (answer.length < questions.length) {
        ask(answer.length)
    } else {
        process.exit();
    }
});

process.on('exit', () => {
    const [name, activity, lang] = answer;
    console.log(`
    Thank you for you answer.
    Go ${activity} ${name}, write ${lang} code later
    `)
})