'use strict';

// write your code here

const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = 'Promise was resolved!';
    body.appendChild(div);
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.classList.add('error-message');
    div.textContent = 'Promise was rejected!';
    body.appendChild(div);
    // eslint-disable-next-line prefer-promise-reject-errors
    reject('Promise was rejected!');
  }, 3000);
});

promise1
  .then((successData) => {
    return `'promise1 resolved', ${successData}`;
  })
  .catch((errorData) => {
    return `'promise1 rejected', ${errorData}`;
  });

promise2
  .then((successData) => {
    return `'promise2 resolved', ${successData}`;
  })
  .catch((errorData) => {
    return `'promise2 rejected', ${errorData}`;
  });
