module.exports = function add({ input1, input2 }) {
  const num1 = parseFloat(input1);
  const num2 = parseFloat(input2);
  if (isNaN(num1) || isNaN(num2)) {
    return '<h1>Invalid inputs, please enter valid numbers.</h1>';
  }
  return `<h1>Sum is: ${num1 + num2}</h1>`;
};
