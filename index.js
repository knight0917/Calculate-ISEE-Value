function calculateAsset(){
    var property = document.getElementById('property').value;
    var reduPercAsset;
    var result = document.getElementById('reduPercAsset')

    reduPercAsset = property*0.20;
    result.innerHTML = reduPercAsset;
    return reduPercAsset;
}

function calculateIcome(){
    var income = document.getElementById('balance').value;
    var reduPercIncome;
    var result = document.getElementById('reduPercIncome')

    reduPercIncome = income*0.20;
    result.innerHTML = reduPercIncome;
    return reduPercIncome;
}

function submit(){
    var annual = document.getElementById('annual').value;
    var asset = calculateAsset();
    var income = calculateIcome();

    console.log(asset)
    console.log(income)

    var sums = parseFloat(annual) + asset + income;  // make annual behave like float
    console.log(sums);
}


