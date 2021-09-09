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

## HEROKU

```bash
$ git init
$ git add .
$ git remote -v
$ git status 
$ git commit -m "file create | initial commit"
$ heroku create simplestjsapi
$ git remote -v
$ heroku git:remote -a simplestjsapi
$ git remote -v
$ git branch
$ git push heroku master
```
#### postman
* get https://simplestjsapi.herokuapp.com/
* get https://simplestjsapi.herokuapp.com/users
* get https://simplestjsapi.herokuapp.com/user/Tony
* post https://simplestjsapi.herokuapp.com/adduser
> raw body:
```json
{
    "name": "Alejo",
    "email": "afrancocedeno@gmail.com"
}
```
