const singupModel = require("../model/singupModel")

    module.exports.singup = async (customer) => {
        let singup = new singupModel();
        return( await singup.add(customer));
        
        
    }