```bash
$ npm init
$ npm install express --save
$ npm install body-parser --save
# package.json -> scripts -> "start": "node app.js"
$ npm install --save-dev nodemon
```

### Using http
```bash
$ node http.js
```

### Using express
```bash
$ node http.js
```

### run the app
```bash
$ nodemon run start
```
postman

* get     localhost:4041
* get     localhost:4041/users
* post    localhost:4041/adduser

> raw body:
```json
{
    "name": "Alejo",
    "email": "afrancocedeno@gmail.com"
}
```
