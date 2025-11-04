const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector(' ');

const li = document.createElement('li');

const deleteButton = document.createElement('button');

li.textContent = input.value;

deleteButton.textContent = '❌';

li.appendChild(deleteButton);
list.appendChild(li);