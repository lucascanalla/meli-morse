const {validateString, searchData} = require('../services')

describe("Pruebas unitarias en function ValidateString", ()=>{
    describe("con parametro 'bits'", ()=>{
        test("Se envia un Boolean String Valido, Retorna TRUE", async ()=>{
            let booleanString = 1000100001
            let resp = await validateString(booleanString, 'bits');
            expect(resp).toBe(true);
        });
        test("Se envia un Boolean String Invalido, Retorna FALSE", async ()=>{
            let booleanString = 100010010113;
            let resp = await validateString(booleanString, 'bits');
            expect(resp).toBe(false);
        });
    });
    describe("con parametro 'morse'", ()=>{
        test("Se envia un Morse String Valido, Retorna TRUE", async ()=>{
            let morseString = '..--';
            let resp = await validateString(morseString, 'morse');
            expect(resp).toBe(true);
        });
        test("Se envia un Morse String Invalido, Retorna FALSE", async ()=>{
            let morseString = '/';
            let resp = await validateString(morseString, 'morse');
            expect(resp).toBe(false);
        });
    });
    describe("con parametro 'human'", ()=>{
        test("Se envia un Caracter Valido, Retorna TRUE", async ()=>{
            let boolString = 'aasd asdDD';
            let resp = await validateString(boolString, 'human');
            expect(resp).toBe(true);
        });
        test("Se envia un Caracter Invalido, Retorna FALSE", async ()=>{
            let boolString = '*';
            let resp = await validateString(boolString, 'human');
            expect(resp).toBe(false);
        });
    });
})

describe("Pruebas unitarias en function SearchData", ()=>{
    describe("con parametro 'bits'", ()=>{
        test("Se envia un Boolean String que pertenece al alfabeto, Retorna '..-. ' ", async ()=>{
            let boolString = "1001000100"
            let resp = await searchData(boolString, 'bits', 1);
            expect(resp).toBe(`..-. `);
        });
    });
    describe("con parametro 'morse'", ()=>{
        test("Se envia un Morse String que pertenece al alfabeto, Retorna 'l' ", async ()=>{
            let morseString = ".-.."
            let resp = await searchData(morseString, 'morse', 1);
            expect(resp).toBe(`l`);
        });
    });
    describe("con parametro 'human'", ()=>{
        test("Se envia un Caracter que pertenece al alfabeto, Retorna '..-. ' ", async ()=>{
            let caracterString = "f"
            let resp = await searchData(caracterString, 'human', 1);
            expect(resp).toBe(`..-. `);
        });
    });

})
