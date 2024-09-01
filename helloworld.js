const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
}

rl.question('What is your name? ', (name) => {
    const greeting = getGreeting();
    console.log(`${greeting}, ${name}!`);
    rl.close();
});
