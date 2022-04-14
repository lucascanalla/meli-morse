const alphabet = require('../data')

async function validateString(str, from) {
    switch (from) {
        case 'human':
            var regHuman = /^[a-z 0-9 \s]+$/gi
            var resp = regHuman.test(str)
            return resp
        case 'bits':
            var regBoolean = /^[0-1]+$/gi
            var resp = regBoolean.test(str)
            return resp
        case 'morse':
            var regMorse = /^[\s -.]+$/g
            var resp = regMorse.test(str)
            return resp
    }  
}

async function searchData(filter, from, index, res){
    switch (from) {
        case 'morse': 
            try {
                var [target] = alphabet.filter(data => data.morse === filter)
                return (target.character)
            } catch (error) {
                return res.send ({  
                    code: 404,
                    response: 'Error: #'+`${index}`+' character is not in alphabet' 
                })            
            }
        case 'human':
            try {
                var [target] = alphabet.filter(data => data.character === filter)
                return (target.morse + ' ')
            } catch (error) {
                return res.send ({  
                    code: 404,
                    response: 'Error: #'+`${index}`+' character is not in alphabet' 
                })            
            }
        case 'bits': 
            try {
                var [target] = alphabet.filter(data => data.binary === filter)
                return (target.morse + ' ')
            } catch {
                return res.send ({  
                    code: 404,
                    response: 'Error: #'+`${index}`+' character is not in alphabet' 
                })         
            }
    }
    
}

module.exports = {validateString, searchData}