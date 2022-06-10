"use strict";

function prcount() {
    let monthSumm = 145000; // сумма начислений за выбранный период
    let bet = 23.229; //годовая процентная ставка
    let totalSumm = 1345000; // текущая сумма денег у вас (первый член геометрической прогрессии)
    let interval = 12; // сколько раз в год выплачивается %. Раз в месяц = 12.
    let percentage = bet/interval/100+1; // месячный процент
    let yearAward = 0; // годовая премия

    let startSumm = totalSumm;
    let j = 0;
    
    
    for (let i = 1; i<=120; i++) {
        if (i != 1) {
            totalSumm = totalSumm + monthSumm;
        }
        if (i % 12 == 4 && i >= 12) {
            totalSumm = totalSumm + yearAward;
            j++;
        }
        totalSumm = totalSumm * percentage;
        let invested = (i-1)*monthSumm+startSumm+yearAward*j;
        console.log(i + ' месяц. Сумма = ' + totalSumm + ' вместо ' + invested + ' ; Вычет выплачивался '+ j + ' раз');
        // console.log(i + ' месяц. Сумма = ' + totalSumm + ' вместо ' + `${(i-1)*monthSumm+startSumm }`);
    }
}

prcount();