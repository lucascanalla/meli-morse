'use strict'
var alphabet = require('../data/index')

function translateHuman2Morse(req, res) {
    var morseToReturn = '';
    var humanArray = Array.from(req.body.text);

    for (let i = 0; i < humanArray.length; i++) {
        try {
            var [target] = alphabet.filter(data => data.character === humanArray[i])
            morseToReturn += target.morse + ' '
        } catch (error) {
            return res.json({  
                                code: 400,
                                response: 'Error to translate #'+`${i}`+' character' 
                            })
        }
        
    }

    return res.json({ 
        code: 200,
        response: morseToReturn
    })
}

function decodeBits2Morse(req, res) {
    var morseToReturn = '';
    var startIndex = 0;
    var endIndex = 10;
    var bitCount = 10;
    var bitsArray = req.body.text;

    while (startIndex < bitsArray.length) {
        if (parseInt(bitsArray[startIndex]) === 1) {
            var bitCode = bitsArray.substring(startIndex, endIndex);
            endIndex = endIndex + bitCount
            startIndex = startIndex + bitCount
                // console.log("bitCode");
                // console.log(bitCode);
                // console.log("startIndex");
                // console.log(startIndex);
                // console.log("endIndex");
                // console.log(endIndex);
            try {
                var [target] = alphabet.filter(data => data.binary === bitCode)
                morseToReturn += target.character + ' '
            } catch (error) {
                return res.json({  
                                    code: 400,
                                    response: 'Error to translate #'+`${startIndex}`+' character' 
                                })
            }
        }else{
            startIndex++;
            endIndex++;
        }
        
    }

    return res.json({ 
        code: 200,
        response: morseToReturn
    })

}
module.exports = {
    translateHuman2Morse,
    decodeBits2Morse
};