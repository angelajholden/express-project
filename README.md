# Express App :sunflower:

## Project files after finishing Traversy Media Node/Express crash course

### Getting started with this project

```
git clone git@github.com:angelajholden/express-test.git
npm install
```

---

### Starting a node/express app from scratch

Initialize node app and create `package.json`

```
npm init -y
```

Install `express` and `ejs`

```
npm i express ejs
```

Install `nodemon` as dev dependency

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

To start the app

```
npm run dev
```

---

### Git

Create new file `.gitignore` and add these folder/files

```
node_modules
tmp
.tmp
.npm-debug.log
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

Check your status

```
git status
```

### Github

1. Login to your personal Github account
2. Click New Repository (green button)
3. Add Repository name (required)
4. Add Description (optional)
5. Select Public or Private (required)
6. Do not initialize repository with README (you can do this later)
7. Do not create a `.gitignore` (you already did this)
8. Create a license (optional)

### Go back to your files

Change the branch name from `master` to `main`

```
git branch -M main
```

Add the remote origin URL - copy this from Github

```
git remote add origin git@github.com:<user_name>/<repository_name>.git
```

Push to your Github repository

```
git push -u origin main
```

Refresh your Github repository page! :tada:
