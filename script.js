function kalkulyator(emekHaqqi, faizOrani, maksimumMuddet) {
    let maksimumKredit = emekHaqqi * 10;
    let maksimumAyliqOdenish = emekHaqqi * 0.45;

    let kreditMeblegi = 0;
    let ayliqOdenish = 0;
    let faizOraniIlq12Ay = 13;
    let faizOrani12_24Ay = 15;
    let faizOrani24_36Ay = 17;

    if (maksimumMuddet <= 12) {
        faizOrani = faizOraniIlq12Ay;
    } else if (maksimumMuddet <= 24) {
        faizOrani = faizOrani12_24Ay;
    } else if (maksimumMuddet <= 36) {
        faizOrani = faizOrani24_36Ay;
    } else {
        return "size kredit dusmur.";
    }

    kreditMeblegi = Math.min(maksimumKredit, emekHaqqi * maksimumMuddet);
    ayliqOdenish = (kreditMeblegi * faizOrani / 100) / maksimumMuddet;

    if (ayliqOdenish > maksimumAyliqOdenish) {
        return "size kredit dusmur";
    }

    return "Kredit Mebleği: " + kreditMeblegi + " AZN, Faiz Oranı: " + faizOrani + "%, Aylıq Ödeme: " + ayliqOdenish.toFixed(2) + " AZN";
}

// Misal gosterek:
let emekHaqqi = 3000; 
let maksimumMuddet = 16; 
console.log(kalkulyator(emekHaqqi, 15, maksimumMuddet));