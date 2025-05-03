# 📘 Course: Digital Pathsala

## 🔗 Table of Contents

### [📅 Day 1]()

### [📅 Day 2]()

### [📅 Day 3]()

### [📅 Day 4]()

### [📅 Day 5]()

### [📅 Day 6]()

### [📅 Day 7]()

### [📅 Day 8]()

### [📅 Day 9]()

### [ 📅 Day 10 – Supabase + Sequelize + .env Setup](#-day-10--supabase--sequelize--env-setup)

---

### 📅 Day 10 – Supabase + Sequelize + .env Setup

- [📦 Packages Used](####-📦-Packages-Used)
- [✅ 1. Install Dependencies](####️-1-install-dependencies)
- [🌐 2. Environment Variables Setup (.env)](####-2-environment-variables-setup-env)
- [🛠️ 3. Sequelize Database Connection](####️-3-sequelize-database-connection)
- [🔁 4. Alternate Method (Without dotenv)](####-4-alternate-method-without-dotenv)
- [🧾 .gitignore Setup](####-gitignore-setup)
- [📌 Notes](####-notes)

This guide covers how to connect a Supabase PostgreSQL database to a Node.js backend using the Sequelize ORM. It also includes how to manage environment variables securely using `.env` and `dotenv`.

---

#### 📦 Packages Used

| Package     | Purpose                           |
| ----------- | --------------------------------- |
| `pg`        | PostgreSQL driver for Node.js     |
| `sequelize` | ORM to interact with PostgreSQL   |
| `dotenv`    | Load environment variables safely |

#### ✅ 1. Install Dependencies

Install the necessary packages:

```bash
npm install pg sequelize dotenv
```

#### 🌐 2. Environment Variables Setup (.env)

Create a .env file in the root of your project (not inside /src) and store your database credentials and other constants.
.

```.env
CS=postgresql://postgres.cututirdybwovnlzwory:<password>@aws-0-ap-south-1.pooler.supabase.com:6543/postgres
DATA=Apple
```

🔒 Important: Never commit your .env file to version control. Add it to .gitignore.

#### 🛠️ 3. Sequelize Database Connection

Create a file: `database/connection.js`

```js
// database/connection.js
const { Sequelize } = require("sequelize");
require("dotenv").config(); // Load .env

const sequelize = new Sequelize(process.env.CS, {
  dialect: "postgres",
  logging: false, // Optional: disable SQL logging
});

module.exports = sequelize;
```

#### 🔁 4. Alternate Method (Without dotenv)

If you don’t want to use `dotenv`, you can run your app with environment variables directly:

Edit `package.json`:

```json
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node --env-file=.env --watch app.js",
  },
```

Now Access .`env` data

```js
// database connection code/logic
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.cs);

sequelize
  .authenticate()
  .then(() => {
    console.log("Authentication successful");
  })
  .catch((err) => {
    console.log(err);
  });
const db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};

module.exports = db;
```

Now Test it `connection.js`

```bash
node app.js
# OR
node connection.js
```

---

#### 🧾 .gitignore Setup

create a `.gitignore` i.e outside `src/` file while will not push the files/folders listted in it.

```.gitignore
node_modules/
.env
```

#### 📌 Notes

- ✅ Sequelize helps structure and scale database access.
- ✅ Using .env keeps sensitive info safe and configurable.
- 🔁 You can add more keys like PORT, JWT_SECRET, etc. in .env as your project grows.
