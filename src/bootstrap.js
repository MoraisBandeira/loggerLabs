'use extrict'

class Bootstrap{
    constructor(app){
        this.app = app;
    }
    async exec(port){
        this.app.listen(port)
    }
}

module.exports  = Bootstrap;
