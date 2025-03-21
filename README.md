# 💻 Leetcode Solutions in JavaScript

This repository contains well-structured, in-depth JavaScript solutions to popular Leetcode problems — including **Big O analysis**, **clean code**, and **corresponding test files** using [Jest](https://jestjs.io/).

Each problem is stored by its number and slug, making it easy to search, sort, and track progress.

---

## 📁 Folder Structure

```
leetcode-js/
├── problems/      # JavaScript files for each problem
│   ├── 0001-two-sum.js
│   ├── 0121-best-time-to-buy-and-sell-stock.js
│   └── ...
├── tests/         # Test files, one per problem
│   ├── 0001-two-sum.test.js
│   ├── 0121-best-time-to-buy-and-sell-stock.test.js
│   └── ...
├── utils/
│   └── run-test.js  # Custom script to run a single test
├── package.json
├── jest.config.js
└── README.md
```

---

## 🧠 Problem Format

Each solution file includes:
- ✅ A link to the original problem on Leetcode
- ⏱️ Time & space complexity
- 🧠 Well-structured logic (sometimes brute force + optimized version)
- ✅ Exported function for testing

Example: `problems/0001-two-sum.js`

```js
/**
 * Leetcode Problem #1 - Two Sum
 * https://leetcode.com/problems/two-sum/
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
  return [];
}

module.exports = twoSum;
```

---

## 🧪 Running Tests

Install dependencies:
```bash
npm install
```

### ✅ Run all test cases
```bash
npm test
```

### ▶️ Run a single problem’s test file
Use the problem’s filename (without `.test.js`) from the `tests/` directory:

```bash
npm run test:one 0001-two-sum
```

This runs only `tests/0001-two-sum.test.js`.

---

## 📌 Naming Convention

Each file is named using:
```
[4-digit problem number]-[kebab-case-problem-slug].js
```

Examples:
- `0001-two-sum.js`
- `0121-best-time-to-buy-and-sell-stock.js`
- `0146-lru-cache.js`

This keeps files **sortable**, **searchable**, and aligned with Leetcode.

---

## 🛠 Custom Test Runner

You can run a single test like this:
```bash
npm run test:one 0121-best-time-to-buy-and-sell-stock
```

This uses the helper script: `utils/run-test.js`.

---

## 📚 Related Projects

In my [YouTube channel](https://www.youtube.com/@yourcodingteacher?sub_confirmation=1), I solve these problems in detail and apply many of them to real-world **ReactJS projects**.

---

## 🧾 License

This repository is licensed under the **MIT License** — feel free to fork, learn, and build on top of it!
