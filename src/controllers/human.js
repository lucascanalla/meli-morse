'use strict'
const {validateString, searchData} = require('../services')

async function translateMorse2Human(req, res) {
    //Validate with RegExp if the request is compatible
    var validString = await validateString(req.body.text, 'morse')

    if (validString) {
        var textToReturn = '';
        //Get all the morse characters using space like a separator and filter
        var morseString = req.body.text.split(' ')
        try {
            for (let i = 0; i < morseString.length; i++) {
                //For every morse character, try to get the human character and add to textToReturn
                textToReturn += await searchData(morseString[i], 'morse', i, res)
            }
            return res.json({  
                code: 200,
                response: textToReturn
            })
        } catch {
            //If something was wrong, this exception comes from searchData
        } 
    }else{
        return res.json({  
            code: 403,
            response: 'Some character on string are forbidden' 
        })
    }
}

function test(req, res){
	res.status(200).send({
		message:'probando el controlador'
	});
}

module.exports = {translateMorse2Human, test};


