const passwordbox = document.getElementById('passwordbox');
const container = document.getElementById('container');
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower = 'abcdefghijklmnopqrstuvwxyz';
const num = '0123456789';
const symbol = '!@#$%^&*()_+/?<>,.;-`~`';
const all = upperCase + lower + num + symbol;

// let length =12;

function generate() {
  let length = document.getElementById('lengthOfPassword').value;
  if (length == 0) {
    length = 12;
  }

  if (length > 50) length = 12;

  let password = '';

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lower[Math.floor(Math.random() * lower.length)];
  password += num[Math.floor(Math.random() * num.length)];
  password += symbol[Math.floor(Math.random() * symbol.length - 1)];

  while (length > password.length) {
    password += all[Math.floor(Math.random() * all.length)];
  }

  passwordbox.value = password;
  container.style = 'display:block';

  return;
}

function copy(params) {
  passwordbox.select();
  document.execCommand('Copy');
}
