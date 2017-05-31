const inquirer = require('inquirer');
const spawn = require('child_process').spawn;
const ls = spawn('npm',['run','dev']);

var questions = [
  {
    type: 'confirm',
    name: 'toBeDelivered',
    message: 'Is this for delivery?',
    default: false
  }
];

inquirer.prompt(questions).then(function (answers) {
  console.log('\nOrder receipt:');
  console.log(JSON.stringify(answers, null, '  '));

  ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  ls.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });

});
