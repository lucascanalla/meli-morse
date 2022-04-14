'use strict'
const {validateString, searchData} = require('../services')

async function translateHuman2Morse(req, res) {
    var validString = await validateString(req.body.text, 'human')
    if (validString) {
        var morseToReturn = '';
        var humanArray = Array.from((req.body.text).toLowerCase());
        try {
            
            for (let i = 0; i < humanArray.length; i++) {
                morseToReturn += await searchData(humanArray[i], 'human', i, res);
            }
            
            return res.json({ 
                code: 200,
                response: morseToReturn
            })
        } catch  {}
    }else{
        return res.json({  
            code: 403,
            response: 'Some character on string are forbidden' 
        })
    }
}

async function decodeBits2Morse(req, res) {
    var validString = await validateString(req.body.text, 'bits');
    if (validString) {
        var morseToReturn = '';
        var startIndex = 0;
        var endIndex = 10;
        //Binary digits 
        const bitCount = 10;
        var bitString = req.body.text;

        try {
            while (startIndex < bitString.length) {
                //All the binary code in alphabet starts with 1.
                //Then get the bitCode using the startIndex and endIndex for match in alphabet   
                if (parseInt(bitString[startIndex]) === 1) {

                var bitCode = bitString.substring(startIndex, endIndex);          
                morseToReturn += await searchData(bitCode, 'bits', startIndex, res);
                startIndex = startIndex + bitCount
                endIndex = endIndex + bitCount
                
                }else{
                    //If not should be a user delay. 
                    startIndex++;
                    endIndex++;
                }
                
            }
            return res.json({ 
                code: 200,
                response: morseToReturn
            })
        } catch  {}
    }else{
        return res.json({  
            code: 403,
            response: 'Some character on string are forbidden' 
        })
    }
}

module.exports = {
    translateHuman2Morse,
    decodeBits2Morse
};