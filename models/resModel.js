class BaseModel {
    constructor (data, message) {
        if (typeof data === 'string') {
            // this.message = data
            data = null
            message =null
            status = null            
        }
        if (data) {
            this.data = data
        }
        if(message){
            this.message = message
        }    
    }
}

class SuccessModel extends BaseModel {
    constructor(data, message) {
        // console.log(message);
        super(data, message)
        this.success = true      
        this.status = '200'
        this.message = null
    }
}

class ErrorModel extends BaseModel {
    constructor(data, message) {
        super(data, message)
        this.success = false
        this.status = '400'
        this.message = message
    }
}
module.exports = {
    SuccessModel,
    ErrorModel
}
    
