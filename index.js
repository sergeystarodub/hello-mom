const button = document.querySelector('button');
const output = document.querySelector('.output');
const heading = document.querySelector('.heading'); /* добавил я */

button.addEventListener('click', function() {
    output.innerHTML = 'Мама, я тебя люблю 🧡';
    heading.innerHTML = 'Ты самая лучшая мама в мире😉'; /* добавил я */
});

