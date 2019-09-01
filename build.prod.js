const { execSync } = require('child_process');
const path = require('path');

try {

  exec('webpack --config webpack.config.js --env.prod');

  exec('cp -v ' + path.resolve(__dirname, 'dist', 'Yagols.html') + ' ' + path.resolve(__dirname));

  function exec(cmd) {
    let stdout = '';
    console.log('EXEC: ' + cmd + ' . . . ')
    try {
      stdout = execSync(cmd);
    } catch (err) {
      console.log('ERROR\nSTDOUT:\n' + String(err.stdout));
      console.log('ERROR Status: ' + err.status + '\nMessage: ' + err.message);
      throw new Error('');
    }
    console.log('OK\n' + String(stdout));
  }

} catch(e) {e}
