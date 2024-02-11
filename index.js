function asset(){
    var property = document.getElementById('property').value;
    var reduPercAsset;
    var result = document.getElementById('reduPercAsset')

    reduPercAsset = property*0.20;
    result.innerHTML = reduPercAsset;
    return reduPercAsset;
}

function income(){
    var income = document.getElementById('balance').value;
    var reduPercIncome;
    var result = document.getElementById('reduPercIncome')

    reduPercIncome = income*0.20;
    result.innerHTML = reduPercIncome;
    return reduPercIncome;
}

function submit(reduPercAsset, reduPercIncome){
    var annual = document.getElementById('annual').value;
    var asset = reduPercAsset;
    var income = reduPercIncome;

    var sums = annual + asset + income;
    console.log(sums);
}

submit(asset(), income())