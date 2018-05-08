const { exec } = require('child_process');
var cmd = process.env.NODE_ENV == 'production' ? 'node server' : 'nodemon server | ng serve --proxy-config proxy.config.json';

exec(cmd, (err, stdout, stderr) => {
  if (err) {
    // node couldn't execute the command
    return;
  }
  // the *entire* stdout and stderr (buffered)
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});