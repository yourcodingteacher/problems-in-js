const fs = require('fs');
const path = require('path');

function padNumber(num) {
  return num.toString().padStart(4, '0');
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function createFiles(problemNumber, problemTitle) {
  const number = padNumber(problemNumber);
  const slug = slugify(problemTitle);
  const fileName = `${number}-${slug}`;

  const problemPath = path.join(__dirname, '..', 'problems', `${fileName}.js`);
  const testPath = path.join(__dirname, '..', 'tests', `${fileName}.test.js`);

  const problemTemplate = `/**
 * Leetcode Problem #${problemNumber} - ${problemTitle}
 * https://leetcode.com/problems/${slug}/
 *
 * @param {any} input
 * @return {any}
 */
function ${slug.replace(/-/g, '_')}(input) {
  // TODO: Implement solution
}

module.exports = ${slug.replace(/-/g, '_')};
`;

  const testTemplate = `const solution = require('../problems/${fileName}');

test('Example 1', () => {
  expect(solution(/* your input here */)).toEqual(/* expected output */);
});
`;

  if (fs.existsSync(problemPath) || fs.existsSync(testPath)) {
    console.error('❌ File already exists. Aborting.');
    return;
  }

  fs.writeFileSync(problemPath, problemTemplate);
  fs.writeFileSync(testPath, testTemplate);

  console.log(`✅ Created:\n- ${problemPath}\n- ${testPath}`);
}

// --- CLI Handling ---
const [,, numArg, ...titleParts] = process.argv;
if (!numArg || titleParts.length === 0) {
  console.error('Usage: node utils/create-problem.js <number> "<problem title>"');
  process.exit(1);
}

createFiles(numArg, titleParts.join(' '));

