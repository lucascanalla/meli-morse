'use strict'
var alphabet = require('../data/index')

//function translate2human convert from MORSE to TEXT
function translate2Human(req, res) {
    var textToReturn = '';
    //get all the morse characters using space like a separator and filter
    var morseString = req.body.text.split(' ')
    
    for (let i = 0; i < morseString.length; i++) {
        
        //check if start with space, then add a space in a text
        // if(morseString[i] === ''){
        //     textToReturn += ' ';
        // }else{   
            try {
                var [target] = alphabet.filter(data => data.morse === morseString[i])
                textToReturn += target.character
            } catch (error) {
                return res.json({  
                                    code: 400,
                                    response: 'Error to translate #'+`${i}`+' character' 
                                })
            }
        //}
            
    }

    return res.json({  
                        code: 200,
                        response: textToReturn
                    })

}

function pruebas(req, res){
	res.status(200).send({
		message:'probando el controlador'
	});
}

module.exports = {translate2Human, pruebas};


