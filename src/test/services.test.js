var {validateString, searchData} = require('../services')

describe("Pruebas unitarias en function ValidateString", ()=>{
    describe("con parametro 'bits'", ()=>{
        test("Se envia un Boolean String Valido, Retorna TRUE", async ()=>{
            var booleanString = 1000100001
            var resp = await validateString(booleanString, 'bits');
            expect(resp).toBe(true);
        });
        test("Se envia un Boolean String Invalido, Retorna FALSE", async ()=>{
            var booleanString = 100010010113;
            var resp = await validateString(booleanString, 'bits');
            expect(resp).toBe(false);
        });
    });
    describe("con parametro 'morse'", ()=>{
        test("Se envia un Morse String Valido, Retorna TRUE", async ()=>{
            var morseString = '..--';
            var resp = await validateString(morseString, 'morse');
            expect(resp).toBe(true);
        });
        test("Se envia un Morse String Invalido, Retorna FALSE", async ()=>{
            var morseString = '/';
            var resp = await validateString(morseString, 'morse');
            expect(resp).toBe(false);
        });
    });
    describe("con parametro 'human'", ()=>{
        test("Se envia un Caracter Valido, Retorna TRUE", async ()=>{
            var boolString = 'aasd asdDD';
            var resp = await validateString(boolString, 'human');
            expect(resp).toBe(true);
        });
        test("Se envia un Caracter Invalido, Retorna FALSE", async ()=>{
            var boolString = '*';
            var resp = await validateString(boolString, 'human');
            expect(resp).toBe(false);
        });
    });
})

describe("Pruebas unitarias en function SearchData", ()=>{
    describe("con parametro 'bits'", ()=>{
        test("Se envia un Boolean String que pertenece al alfabeto, Retorna '..-. ' ", async ()=>{
            var boolString = "1001000100"
            var resp = await searchData(boolString, 'bits', 1, res);
            expect(resp).toBe(`..-. `);
        });
        // test('Se envia un Boolean String que no existe en el alfabeto, Retorna Error 404', async ()=>{
        //     var boolString = "1101100111";
        //     var resp = await searchData(boolString, 'bits', 1, res);
        //     expect(resp.code).toBe(404);
        // });
    });

    describe("con parametro 'morse'", ()=>{
        test("Se envia un Morse String que pertenece al alfabeto, Retorna 'l' ", async ()=>{
            var morseString = ".-.."
            var resp = await searchData(morseString, 'morse', 1, res);
            expect(resp).toBe(`l`);
        });
        // test('Se envia un Morse String que no existe en el alfabeto, Retorna Error 404', async ()=>{
        //     var morseString = "1101100111";
        //     var resp = await searchData(morseString, 'morse', 1, res);
        //     expect(resp.code).toBe(404);
        // });
    });

    describe("con parametro 'human'", ()=>{
        test("Se envia un Caracter que pertenece al alfabeto, Retorna '..-. ' ", async ()=>{
            var caracterString = "f"
            var resp = await searchData(caracterString, 'human', 1, res);
            expect(resp).toBe(`..-. `);
        });
        // test('Se envia un Caracter que no existe en el alfabeto, Retorna Error 404', async ()=>{
        //     var caracterString = "=";
        //     var resp = await searchData(caracterString, 'human', 1 , res);
        //     expect(resp.code).toBe(404);
        // });
    });

})
