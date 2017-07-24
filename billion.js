var days = 30;
var amount = .01;
var max = Infinity;

function reward(days, amount, max){
    for (var d = 1; d < days; d += 1){
        if((amount *= 2) > max){
            break;
        }
        else{
        amount *= 2;
        }
    }
    if (days > d && amount > max){
        amount = max;
    }
    console.log('After', d, 'days the reward is', amount);
}

reward(days, amount, max);