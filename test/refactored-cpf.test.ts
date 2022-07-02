import {CPFIsValid, CalculateCheckDigit} from "../src/refactored-cpf";

test("Deve testar 1º digito verificador", function(){
    let CPF= "048536269";
    let checkDigit= CalculateCheckDigit(CPF, 10);
    expect(checkDigit).toBe(4);
});

test("Deve testar 2º digito verificador", function(){
    let CPF= "0485362694";
    let checkDigit= CalculateCheckDigit(CPF, 11);
    expect(checkDigit).toBe(8);
});

test("Deve validar CPF como Ok", function () {
    const validCPFDigit = CPFIsValid("07916846950");
    expect(validCPFDigit).toBe(true);
});

test("Deve validar CPF como NOk (dígitos incorretos)", function () {
    const validCPFDigit = CPFIsValid("07916846951");
    expect(validCPFDigit).toBe(false);
});

test("Deve validar CPF como NOk (dígitos idênticos)", function () {
    const validCPFDigit = CPFIsValid("99999999999");
    expect(validCPFDigit).toBe(false);
});