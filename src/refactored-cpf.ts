// @ts-nocheck
const CPFDefaultSize = 11;

function CPFContainsIdenticalDigits(CPF: String){
    return (CPF.split("").every(c => c === CPF[0]))
}

function ReplaceSpecialChars(CPF: String){
    return CPF
    .replace('.','')
    .replace('.','')
    .replace('-','')
    .replace(" ","");  
}

export function CalculateCheckDigit(CPF: string, startOfCalc: number){
    let totall = CPF.split("").reduce((acumum: number, num: number) => {
        return acumum += num * startOfCalc--;
    }, 0);
    let divisionRestBy11 = (totall % CPFDefaultSize);  
    return (divisionRestBy11 < 2) ? 0: CPFDefaultSize - divisionRestBy11; 
}

export function CPFIsValid (CPF: String) {
	if ((CPF == null) || (CPF == undefined))
        return false;
    CPF = ReplaceSpecialChars(CPF);
    if ((CPF.length != CPFDefaultSize) || CPFContainsIdenticalDigits(CPF)) 
        return false;
    let currentCheckDigit: string = CPF.substring(CPF.length-2, CPF.length);  
    let CPFWithoutCheckDigit: string = CPF.substring(0, 9);  
    let checkDigit1 = CalculateCheckDigit(CPFWithoutCheckDigit, 10);
    let checkDigit2 = CalculateCheckDigit(CPFWithoutCheckDigit+checkDigit1.toString(), 11);
    let calcCheckDigit = checkDigit1.toString() + checkDigit2.toString();  
    return currentCheckDigit == calcCheckDigit;      
}