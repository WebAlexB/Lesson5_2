// Юзер вводить число. З'ясувати, чи є воно простим. Простим називається ціле число, більше ніж 1, яке не має інших дільників, крім 1 і себе (1 не є простим).
const userNumberSimple = prompt('Enter the number');
if (userNumberSimple === null) {
    alert('As you wish');
} else if (!userNumberSimple.trim() || !Number.isInteger(parseFloat(userNumberSimple))) {
    alert('Please enter a valid positive integer.');
} else {
    const num = Number(userNumberSimple);
    if (num > 1) {
        let isPrime = true;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        const infoNumberSimple = 'a prime number'
        alert(`${num} ${isPrime ? ' is' : ' is not'} ${infoNumberSimple}`);
    } else {
        alert('Enter a valid number greater than 1');
    }
}