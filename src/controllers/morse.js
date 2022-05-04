'use strict'
const {validateString, searchData} = require('../services')

async function translateHuman2Morse(req, res) {
    //Validate with RegExp if the request is compatible
    let validString = await validateString(req.body.text, 'human')
    
    if (validString) {
        let morseToReturn = '';
        //Convert character String in Array for iteration. Also convert to lower case
        let humanArray = Array.from((req.body.text).toLowerCase());
        try {
            for (let i = 0; i < humanArray.length; i++) {
                //For every human character, try to get the morse character and add to morseToReturn
                morseToReturn += await searchData(humanArray[i], 'human', i, res);
            }
            
            return res.json({ 
                code: 200,
                response: morseToReturn
            })
        } catch  {
            //If something was wrong, this exception comes from searchData 
        }
    }else{
        return res.json({  
            code: 403,
            response: 'Some character on string are forbidden' 
        })
    }
}

async function decodeBits2Morse(req, res) {
    //Validate with RegExp if the request is compatible
    let validString = await validateString(req.body.text, 'bits');
    
    if (validString) {
        let morseToReturn = '';
        let startIndex = 0;
        let endIndex = 10;
        //Binary quantity of digits 
        const bitCount = 10;
        let bitString = req.body.text;

        try {
            while (startIndex < bitString.length) {
                //##All the binary code in alphabet starts with 1.##
                //Then get the bitCode using the startIndex and endIndex for match in alphabet   
                if (parseInt(bitString[startIndex]) === 1) {
                    
                    let bitCode = bitString.substring(startIndex, endIndex);
                    //For every Bit sequence, try to get the morse character and add to morseToReturn
                    morseToReturn += await searchData(bitCode, 'bits', startIndex, res);
                    startIndex = startIndex + bitCount
                    endIndex = endIndex + bitCount
                
                }else{
                //##If not should be a user delay.##
                    startIndex++;
                    endIndex++;
                }
            }

            return res.json({ 
                code: 200,
                response: morseToReturn
            })
        } catch  {
            //If something was wrong, this exception comes from searchData
        }
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