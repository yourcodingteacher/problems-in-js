const { exec } = require('child_process');
const args = process.argv.slice(2);

if (args.length !== 1) {
  console.error('❌ Please provide a problem name like: 0001-two-sum');
  process.exit(1);
}

const testFile = `tests/${args[0]}.test.js`;

exec(`npx jest --colors ${testFile}`, (err, stdout, stderr) => {
  console.log(stdout);
  if (stderr) console.error(stderr);
});

