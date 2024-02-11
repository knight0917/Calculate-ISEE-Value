function calculateAsset(){
    var property = document.getElementById('property').value;
    var reduPercAsset;
    var result = document.getElementById('reduPercAsset')

    reduPercAsset = property*0.20;
    result.innerHTML = reduPercAsset;
    return reduPercAsset;
}

function calculateIncome(){
    var income = document.getElementById('balance').value;
    var reduPercIncome;
    var result = document.getElementById('reduPercIncome')

    reduPercIncome = income*0.20;
    result.innerHTML = reduPercIncome;
    return reduPercIncome;
}

function faimlyComposition(){
    var members = document.getElementById('members').value;

    if(members == 1){
        return 1;
    }if(members == 2){
        return 1.57;
    }if(members == 3){
        return 2.04;
    }if(members == 4){
        return 2.46;
    }if(members == 5){
        return 2.85;
    }if((members - 5)>0){
        var m = members-5
        return 2.85 + (0.35*m);
    }
}

function calDisability(){
    var dismembers = document.getElementById('dismembers').value;
    var faimMem= faimlyComposition();

    return (dismembers*0.5)+faimMem;
}

function submit(){
    var annual = document.getElementById('annual').value;

    var asset = calculateAsset();
    var income = calculateIncome();
    var faimMem = faimlyComposition();
    var disMem = calDisability();

    console.log(asset)
    console.log(income)
    console.log(faimMem)
    console.log(disMem)

    var issecal = document.getElementById('isseValue');
    var sums = (parseFloat(annual) + asset + income)/faimMem+disMem;  // make annual behave like float
    issecal.innerHTML = sums;


    console.log(sums);
}


