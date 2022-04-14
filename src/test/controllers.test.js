var axios = require('axios')
var qs = require('qs')

describe("Prueba de Integracion en Controller Human", ()=>{
    describe("Prueba a la funcion translateMorse2Human", ()=>{
        test("Se envia una cadena de Morse String correcta, devuelve codigo legible para el humano 'hola meli'", async ()=>{
            var data = qs.stringify({
                'text': '.... --- .-.. .-  -- . .-.. ..' 
              });
            var config = {
                method: 'post',
                url: 'http://localhost:8080/translate/2text',
                headers: { 
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                data : data
            }; 

            await axios(config).then(function(res) {
                expect(res.data.response).toBe('hola meli')
            })
        });
        test("Se envia una cadena de Morse String incorrecta, devuelve codigo 403", async ()=>{
            var data = qs.stringify({
                'text': '..a3.. --- .-.. .-  -- . .aa-.. ..' 
              });
            var config = {
                method: 'post',
                url: 'http://localhost:8080/translate/2text',
                headers: { 
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                data : data
            }; 

            await axios(config).then(function(res) {
                expect(res.data.code).toBe(403)
            })
        });
        test("Se envia una cadena de Morse String correcta, pero con codigo Morse que no esta en el alfabeto. devuelve 404 ", async ()=>{
            var data = qs.stringify({
                'text': '..--.. --- .-.. .-  -- . .-.. ..' 
              });
            var config = {
                method: 'post',
                url: 'http://localhost:8080/translate/2text',
                headers: { 
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                data : data
            }; 

            await axios(config).then(function(res) {
                expect(res.data.code).toBe(404)
            })
        });
    })
});

describe("Prueba de Integracion en Controller Morse", ()=>{
    describe("Prueba a la funcion translateHuman2Morse", ()=>{
        test("Se envia una cadena de Caracteres correcta, devuelve codigo Morse '.... --- .-.. .-  -- . .-.. ..'", async ()=>{
            var data = qs.stringify({
                'text': 'hola meli' 
              });
            var config = {
                method: 'post',
                url: 'http://localhost:8080/translate/2morse',
                headers: { 
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                data : data
            }; 

            await axios(config).then(function(res) {
                expect(res.data.response).toBe('.... --- .-.. .-  -- . .-.. .. ')
            })

        });
        test("Se envia una cadena de Caracteres incorrecta, devuelve codigo 403", async ()=>{
            var data = qs.stringify({
                'text': 'hol@ meli' 
              });
            var config = {
                method: 'post',
                url: 'http://localhost:8080/translate/2morse',
                headers: { 
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                data : data
            }; 

            await axios(config).then(function(res) {
                expect(res.data.code).toBe(403)
            })
        });

    });
    describe("Prueba a la funcion decodeBits2Morse", ()=>{
        test("Se envia una cadena de Bits correcta, devuelve codigo Morse '----. '", async ()=>{
            var data = qs.stringify({
                'text': '1111100101'
              });
            var config = {
                method: 'post',
                url: 'http://localhost:8080/decode/2morse',
                headers: { 
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                data : data
            }; 

            await axios(config).then(function(res) {
                expect(res.data.response).toBe('----. ')
            })

        });
        test("Se envia una cadena de Bits incorrecta, devuelve codigo 403", async ()=>{
            var data = qs.stringify({
                'text': '1000000100111100001144101000010010100' 
              });
            var config = {
                method: 'post',
                url: 'http://localhost:8080/decode/2morse',
                headers: { 
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                data : data
            }; 

            await axios(config).then(function(res) {
                expect(res.data.code).toBe(403)
            })
        });
        test("Se envia una cadena de Bits correcta, pero con Bits string que no esta en el alfabeto. devuelve 404 ", async ()=>{
            var data = qs.stringify({
                'text': '11110001001111000011' 
              });
            var config = {
                method: 'post',
                url: 'http://localhost:8080/decode/2morse',
                headers: { 
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                data : data
            }; 

            await axios(config).then(function(res) {
                expect(res.data.code).toBe(404)
            })
        });
    })
});