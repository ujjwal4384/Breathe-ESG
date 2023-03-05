const bodyParser = require('body-parser');

require('dotenv').config();

module.exports = (app,mongoose) =>{

    app.use(bodyParser.json());

    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
        next();
    });

    mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER_ID}/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`,{useUnifiedTopology:true,useNewUrlParser:true}).then(async result => {
        const port = process.env.PORT || 3000;
        const server = app.listen(port);
        console.log("SERVER STARTED AT PORT:" + port)
    }).catch(err => {
        console.log(err);
    });
}