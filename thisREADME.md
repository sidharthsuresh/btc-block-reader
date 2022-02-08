you will need nodejs 12 and above to run this micro-service

Please go through the other readme file to know how to run this nestjs application

About:

This is a sample microservice pulls bitcoin block data for bitcoin mainnet via tatum api

Postman collection is also shared in the repo to test out the endpoints

You can also see the swagger UI at http://localhost:5001/api-docs/

I have added 4 different endpoints in this service that does pull btc block data and returns it
4th endpoint can store the block data from a start block to and end block you provide into an elastic db