start project and node modules

```
npm init
```

install all dependencies explucive to this project and manually update tsc with lite-server

```
npm install --save-dev lite-server
```

inside package.json.scripts:

```
"start": "lite-server"
```

open a new terminal and run:

```
npm start
```

changes will be set up after:

```
tsc index.ts
```
