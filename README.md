# Jhonntan Bsale Api
# Bsale Backend Website
![BsaleBackendWeb](/images/BsaleBackendWeb.JPG)


## Demo Website

- 👉 Heroku : [https://bsale-backend-jhonntan.herokuapp.com/docs](https://bsale-backend-jhonntan.herokuapp.com/docs)



## Technologies

- TypeScript
- NodeJS & NestJS: Web API, 
- MySql: Sequelize,
- Development: Git, Github, Sequelize
- Deployment: Heroku

## Run Locally

### 1. Clone repo

```
$ git clone https://github.com/jhonntantb/Bsale-Backend
$ cd Bsale-backend
```

### 2. Setup MySQL
 - Download and Install it from [mysql.com](https://dev.mysql.com/downloads/installer)

### 3. Create .env file
- Create .env file in project folder
- Enter these lines to that:

```
MY_SQL_HOST=mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com
MY_SQL_USERNAME=bsale_test
MY_SQL_PASSWORD=bsale_test
MY_SQL_DATABASE=bsale_test
```

### 4. Run Backend

```
$ npm install
$ npm run start
```
- the server continue listening
```
$ npm run start:dev
```

### 6. View API documentation

- Run this on chrome: http://localhost:8080/docs
- Click the Entity
- View Parameters 
- Go to Postman and test Bsale Backend Api

### 7. Comments
- The query Products has pagination.
- The pagination in backend used for scalability.
- Management big data.

## Support

- Contact Instructor: [Jhonntan](mailto:Jhonntan.jhonntantb@gmail.com)
