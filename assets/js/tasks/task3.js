// Юзер вводить число. Визначити, чи можна одержати це число шляхом зведення числа 3 в деякий цілий ступінь. Наприклад, числа 9, 81 можна отримати, бо це 3^2 і 3^4, а 13 - не можна.
let userNumber = prompt('Enter the number');
let powerOfThree = 1;

if (userNumber === null) {
    alert('As you wish');
} else if (!userNumber.trim() || isNaN(userNumber)) {
    alert('Enter the number');
} else if (!Number.isInteger(parseFloat(userNumber))) {
    alert('Please enter a valid positive integer.');
} else {
    userNumber = parseInt(userNumber);
    if (userNumber <= 0) {
        alert('Please enter a positive integer greater than 0.');
    } else {
        while (powerOfThree < userNumber) {
            powerOfThree *= 3;
        }
        const result = powerOfThree === userNumber;
        const info = 'be represented as a power of 3';
        alert(`${userNumber} ${result ? 'can' : 'cannot'} ${info}`);
    }
}