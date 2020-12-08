# Express App

## Project files after finishing Traversy Media Node/Express crash course

### Getting Started with this project

```
git clone git@github.com:angelajholden/express-test.git
npm install
```

---

### Starting an Express app from scratch

Initialize node app and create `package.json`

```
npm init -y
```

Install `express` and `ejs`

```
npm i express ejs
```

Install `nodemon` as Dev Dependency

```
npm i -D nodemon
```

Add `nodemon` to `package.json/scripts`

```json
"scripts": {
    ...
    "start": "node index",
    "dev": "nodemon index"
  },
```

Start app

```
npm run dev
```

---

### Git

Create new file `.gitignore`

```
node_modules
tmp
.tmp
.npm-debug.log
*.sass-cache
*.css.map
```

Initialize `git` repository

```
git init
```

Stage files and commit

```
git add .
git commit -m "initial commit"
```

### Github

1. Login to your personal Github account
2. Click New Repository (green button)
3. Add Repository name (required)
4. Add Description (optional)
5. Select Public or Private
6. Do not initialize repository with README
7. We already have a `.gitignore`
8. You can choose a license later
