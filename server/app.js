const express=require('express');
const graphqlHTTP=require('express-graphql');
const schema=require('./schema/schema');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();

//mongodb://<dbuser>:<dbpassword>@ds149732.mlab.com:49732/gql-ninja

app.use(cors());

mongoose.connect('mongodb://anuj:anuj123@ds149732.mlab.com:49732/gql-ninja',{useNewUrlParser:true});
mongoose.connection.once('open',() => {
	console.log("Connected to database");
});

app.use('/graphql',graphqlHTTP({
	schema:schema,
	graphiql:true
}));

app.listen(4000,() => {
	console.log("Listening on port 4000");
});