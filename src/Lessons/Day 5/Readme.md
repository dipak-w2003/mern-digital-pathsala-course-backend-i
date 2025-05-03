## 1. Setup project

```bash
mkdir backend
cd backend
npm init -y
npm install express
```

- First Code : ` app.js`

```js
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```
---

## 2. Create custom Own script in NPM with `watch`
It same as but is inbuild in node.js. It will continuously watch for changes in the project directory and restart the server automatically.
```js
{
 // else
 "scripts": {
   "test": "echo \"Error: no test specified\" && exit 1",
   "start": "node --watch app.js",
   "step2": "node --watch app.js"
 },
// else
}
```
- run It:
```bash
- 1) npm run start
- 2) npm run step1
- 3) npm run (same)
```

---

## 2.5. app.get(routes, (req, res))
```js
const epxress = require("express");
const app = epxress();

//app.get() : method graps 3 arguments : routes > request > response
// home : /
app.get("/", (req, res) => {
  res.send("Hello, World, Home Page!");
});
app.get("/about", (req, res) => {
  res.send("Hello, World, About Page!");
});
app.get("/contact", (req, res) => {
  res.send("Hello, World, Contact Page!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


```
---


## 3. Understanding Port Numbers in Networking

### 📘 What is a Port Number?

A **port number** is a 16-bit numerical identifier used in networking to differentiate services or processes running on the same IP address. Port numbers allow multiple applications to run on a single device and still communicate over the network.

For example:

---

### 📊 Port Number Ranges

Port numbers range from **0 to 65535** and are divided into 3 categories:

Example: `127.0.0.1:3000` → Port 3000 is for a local development server.

---

### 📊 Port Number Ranges

| Range         | Type                  | Used For                          |
| ------------- | --------------------- | --------------------------------- |
| 0 - 1023      | Well-known ports      | System services (e.g., HTTP - 80) |
| 1024 - 49151  | Registered ports      | User apps (e.g., MySQL - 3306)    |
| 49152 - 65535 | Dynamic/Private ports | Temporary connections             |

---

### ✅ Can You Use Any Port?

Yes, but with care:

- 🔒 `0–1023`: Reserved. Needs admin access.
- ✅ `1024–65535`: Safe for general use.
- 🚫 Don't use ports already taken by other apps.

---

### ⚠️ Things to Know

- Only **one app** can use a port at a time.
- Firewalls or systems might block some ports.
- Use ports above **1024** when building your own apps.
