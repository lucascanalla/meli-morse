const alphabet = require('../data')

async function validateString(str, from) {
    switch (from) {
        case 'human':
            let regHuman = /^[a-z 0-9 \s]+$/gi
            let respHuman = regHuman.test(str)
            return respHuman
        case 'bits':
            let regBoolean = /^[0-1]+$/gi
            let respBoolean = regBoolean.test(str)
            return respBoolean
        case 'morse':
            let regMorse = /^[\s -.]+$/g
            let respMorse = regMorse.test(str)
            return respMorse
    }  
}

async function searchData(filter, from, index, res){
    switch (from) {
        case 'morse': 
            try {
                let [target] = alphabet.filter(data => data.morse === filter)
                return (target.character)
            } catch (error) {
                return res.send ({  
                    code: 404,
                    response: 'Error: #'+`${index}`+' character is not in alphabet' 
                })            
            }
        case 'human':
            try {
                let [target] = alphabet.filter(data => data.character === filter)
                return (target.morse + ' ')
            } catch (error) {
                return res.send ({  
                    code: 404,
                    response: 'Error: #'+`${index}`+' character is not in alphabet' 
                })            
            }
        case 'bits': 
            try {
                let [target] = alphabet.filter(data => data.binary === filter)
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