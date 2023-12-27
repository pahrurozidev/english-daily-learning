const { execSync } = require('child_process');

// Get the current date
const currentDate = new Date().toLocaleString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
});

// Execute the git commit command
execSync(`git commit -am "${currentDate}" && git push`);
