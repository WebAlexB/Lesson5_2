// Один долар коштує 40 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
const hryvnia = 40;

for (let dollar = 10; dollar <= 100; dollar += 10) {
    const exchangeRate = dollar * hryvnia;
    console.log(dollar + ' ' + 'usd' + ' = ' + exchangeRate + ' ' + 'uah');
}