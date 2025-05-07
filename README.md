# 📘 Course: Digital Pathsala : BACKEND I

## 🔗 Table of Contents

- [📅 Day 1](#-day-1)

- [📅 Day 2](#-day-2)

- [📅 Day 3](#-day-3)

- [📅 Day 4](#-day-4)

- [📅 Day 5](#-day-5)

- [📅 Day 6](#-day-6)

- [📅 Day 7](#-day-7)

- [📅 Day 8](#-day-8)

- [📅 Day 9](#-day-9--supabase--sequelize--env-setup)

- [ 📅 Day 10 – Lessions](#-day-10--lessons)
- [ 📅 Day 11 – Lessions](#-day-11---mvcr-models-view-controller-routes--folder-structure)
- [ 📅 Day 12 – Lessions](#-day-12--delete--update)

---

Here Are the contentss

## 📅 Day 1

- DAY 1

---

## 📅 Day 2

- DAY 2

---

## 📅 Day 3

- DAY 3

---

## 📅 Day 4

- DAY 4

---

## 📅 Day 5

- DAY 5

---

## 📅 Day 6

- DAY 6

---

## 📅 Day 7

- DAY 7

---

## 📅 Day 8

- DAY 8

---

## 📅 Day 9 – Supabase + Sequelize + .env Setup

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

| Package                                                       | Purpose                           |
| ------------------------------------------------------------- | --------------------------------- |
| [`pg`](https://www.npmjs.com/package/pg)                      | PostgreSQL driver for Node.js     |
| [`sequelize`](https://sequelize.org/docs/v6/getting-started/) | ORM to interact with PostgreSQL   |
| [`dotenv`](https://www.npmjs.com/package/dotenv)              | Load environment variables safely |

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

---

## 📅 Day 10 – Lessons

- covered : `Database Models(Tables)`, `Database(Sequelize) Migration`

### 🧠 Code First vs. Database First (Sequelize)

#### 1. 📌 Code First

In this approach, you write models in code first, and Sequelize creates tables in the database.

##### ✅ Steps

1. Define your models using Sequelize.
2. Run `sequelize.sync()` or use migrations to create tables.

##### 📦 Example

```js
// models/book.model.js
const Book = sequelize.define("Book", {
  title: DataTypes.STRING,
  author: DataTypes.STRING,
});
sequelize.sync(); // creates table based on model
```

##### 📍 Use When

- Starting a new project.
- You want full control of database structure through code.

#### 2. 🗃️ Database First

In this approach, the database already exists and you generate Sequelize models from it.

#### ✅ Steps

- Set up your database manually (or it already exists).
- Use a CLI tool like sequelize-auto to generate models.

```bash
npx sequelize-auto -o "./models" -d dbname -h host -u user -p port -x password -e postgres
```

#### 📍 Use When

- Working with an existing or legacy database.
- DB schema is managed by someone else.

### 🔍 Comparison

| Feature     | Code First    | Database First  |
| ----------- | ------------- | --------------- |
| Starts With | Code (models) | Database schema |
| Tools       | Sequelize     | sequelize-auto  |
| Best For    | New projects  | Existing DBs    |

### ✅ Sequelize Migration (Code-first)

#### 🧠 What is it?

- Migration here means creating actual tables in your database based on your defined models (book.model.js, etc.).

#### 🛠️ Code to Migrate Models

- Create `database/model/book.model.js`:

```js
const bookModel1 = (sequelize, DataTypes) => {
  // Define the "book" table
  const Book = sequelize.define("book", {
    bookName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bookGenre: {
      type: DataTypes.STRING,
    },
    // Author name - optional, with a default value
    bookAuthor: {
      type: DataTypes.STRING,
      defaultValue: "unknown-book-author",
    },
  });

  return Book;
};

module.exports = bookModel1;
```

- Create a file like `database/connection.js` or put this logic in app.js:

```js
// database connection code/logic
const { Sequelize, DataTypes } = require("sequelize");
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

// 2. Shorthand trigger  -> require('./models/book.model')(Args)
db.book = require("./models/book.model")(sequelize, DataTypes);
// migrate code / database
sequelize.sync({ force: false }).then(() => {
  console.log("database has been migrated");
});
module.exports = db;
```

#### 🚀 Run the Migration

```bash
node connection.js
# OR
npm start
# npm start (node app.js) -> will run connection.js when you require() it.
```

### 📘 Sequelize Sync: `force: true` vs `force: false`

```js
sequelize.sync({ force: false }).then(() => {});
```

#### 🔧 Purpose

| Option         | Description                                                                    |
| -------------- | ------------------------------------------------------------------------------ |
| `force: true`  | **Drops and recreates** all tables on every run (⚠️ data will be lost).        |
| `force: false` | **Default.** Creates tables only if they don't exist (🟢 safe for production). |

#### ⚠️ When to Use

| Use Case                         | `force` Setting |
| -------------------------------- | --------------- |
| First-time development/testing   | `force: true`   |
| Already deployed / production DB | `force: false`  |

#### 📘 Sequelize Sync: `force: true` vs `alter: false`

| Option        | Behavior                                                              |
| ------------- | --------------------------------------------------------------------- |
| `force: true` | 🔄 Drops and recreates all tables. All data will be lost.             |
| `alter: true` | 🔧 Alters tables to match models, **without** deleting existing data. |

#### 📝 When to Use?

| Use Case                        | Use                      |
| ------------------------------- | ------------------------ |
| Updating table structure safely | `alter: true`            |
| Avoiding any accidental changes | `alter: false` (default) |

- 🔐 Note: `alter` is safer than `force`, but still not recommended for critical production systems unless you’re sure about the change.

---

## 📅 Day 11 - MVC & Folder Structure

- MVC Architecture,
- Postman : API Testing + Integrating data to supabase

## 📘 MVC Pattern – (Model View Controller)

The MVC pattern is a software design pattern that separates the application logic into three interconnected components:

### 📦 Folder Structure (Example)

```bash
project/
│
├── controllers/     # Logic
│   └── book.controller.js
│
├── models/          # Database
│   └── book.model.js
│
├── routes/          # Routes
│   └── book.routes.js
│
├── database/        # DB connection
│   └── connection.js
│
├── app.js           # Entry point
└── .env

```

### 🔍 Components Explained

| Part           | Description                                                             |
| -------------- | ----------------------------------------------------------------------- |
| **Model**      | Manages the data and database logic (e.g., Sequelize models).           |
| **View**       | Handles UI or response (Not always used in API-based backend apps).     |
| **Controller** | Contains the business logic and calls Models; responds to user actions. |
| **Routes**     | Connects URLs/endpoints to Controllers.                                 |

#### 🛠️ Example Flow (Book API)

- User makes a request to /books
- Route in book.routes.js calls the correct function from the controller
- Controller in book.controller.js gets data using the model
- Model in book.model.js fetches data from the database
- Controller sends response back to the user (as JSON)

#### ✅ Benefits of MVC

- Clean separation of concerns
- Easier to scale and maintain
- Promotes reusable and testable code

## 🏗️ Common Software Architectures (Simple Overview)

### 1. **MVC (Model-View-Controller)**

- Model – Data + DB interaction
- View – UI / Frontend
- Controller – Logic & Request Handling
- 📦 Common in: Node.js (Express), Django, Rails

### 2. MVVM (Model-View-ViewModel)

- Model – Data
- View – UI
- ViewModel – Middle layer that binds model and view
- 📦 Common in: Angular, Vue (partially), WPF

### 3. MVP (Model-View-Presenter)

- Similar to MVC but the Presenter handles more logic and updates the view manually.
- 📦 Common in: Android Java/Kotlin apps

### 4. Three-Tier Architecture

- Presentation Layer – UI (Frontend)
- Business Logic Layer – Server Logic (Backend)
- Data Layer – Database
- 📦 Classic web app architecture (React + Express + PostgreSQL)

### 5. Client-Server Architecture

- Client (Frontend) – Browser or app sends request
- Server (Backend) – Responds with data or HTML
- 📦 All modern web apps follow this fundamentally

### 6. Microservices

- App is broken into small, independent services
- Each service has its own DB and runs separately
- 📦 Common in large-scale apps (Netflix, Uber)

### 7. Monolithic Architecture

- All logic (frontend, backend, DB) in one app/project
- 📦 Good for small projects, easy to start

### 8. Serverless Architecture

- Functions run on cloud (like AWS Lambda)
- No need to manage a server
- 📦 Used for quick APIs, scheduled jobs

### 9. Headless Architecture

- Backend is separate and only provides APIs
- Frontend fetches data using those APIs
- 📦 Common with CMS like Strapi, Contentful + React/Next.js

## 🎯 Which Should You Focus On First?

| 🏗️ Architecture   | 🔰 Level       | 🧠 Importance     | 💡 Common Use Cases                        |
| ----------------- | -------------- | ----------------- | ------------------------------------------ |
| **MVC / MVT**     | Beginner → Pro | ⭐ Essential      | Express, Django, Laravel, Rails            |
| **Three-Tier**    | Beginner → Pro | ⭐ Essential      | Full-stack projects (React + Node + DB)    |
| **Client-Server** | All Levels     | ⭐ Essential      | REST APIs, GraphQL, browser-server systems |
| **Microservices** | Advanced       | 🔥 Scalable       | Netflix, Uber, modular backend apps        |
| **Serverless**    | Intermediate   | 🔥 Modern Cloud   | AWS Lambda, Vercel, Cloud Functions        |
| **Headless**      | Intermediate   | 🔥 Frontend-Heavy | Strapi + React, Contentful + Next.js       |
| **MVVM / MVP**    | Niche          | 💡 Special Use    | Angular apps, mobile (Kotlin, Android)     |
| **Monolithic**    | Beginner       | ✅ Good to Start  | Single repo, basic web app, MVPs           |

- ✅ Start with MVC, Three-Tier, and Client-Server to build a solid foundation. Then explore Microservices, Serverless, or Headless as your projects grow.

## API Testing + Data for Supabase - Post Man

- Get Data
- Post Data

## 📅 Day 11 - MVCR (Models View Controller Routes) & Folder Structure

A basic implementation of the MVCR (Model-View-Controller-Router) architectural pattern. This setup separates concerns for maintainability, scalability, and clarity.

### 📁 Project Structure

```bash
.
├── models/         # Data models (e.g., User.js, Task.js)
├── views/          # Template or UI rendering logic (if applicable)
├── controllers/    # Business logic and request handling
├── routes/         # Route definitions and middleware
├── public/         # Static assets (images, CSS, JS)
├── app.js          # Main entry point
├── config/         # Configuration (e.g., DB setup)
└── README.md
```

### 🧱 Components

- `Models` : Define database schema and data-related logic.
- `Views` (Optional in API projects) : If used, contains HTML templates (e.g., EJS, Handlebars).
- `Controllers` : Handles logic, interacts with models, and prepares responses.
- `Routes` : Maps endpoints to controller functions.

### Example 1: simple use of strcuture folders & files ::MVC+R

1. controllers / `bookController.js`

```js
const { books } = require("../database/connection");
// READ
exports.fetchedBooks = async (req, res) => {
  try {
    const fetchedBooks = await books.findAll();
    console.log(fetchedBooks);
    res.status(200).json({
      message: "Books fetched successfully!",
      fetchedBooks,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books." });
  }
};
```

2. Routes/ `bookRoute.js`

```js
const router = express.Router();
const {
  fetchedBooks,
  addBook,
  deleteBook,
  updateBook,
} = require("../controllers/bookController");

// Routes
router
  .route("/")
  .get(fetchedBooks) // GET /books
  .post(addBook); // POST /books

router
  .route("/:id")
  .delete(deleteBook) // DELETE /books/:id
  .put(updateBook); // PUT /books/:id

module.exports = router;
```

3. root/`app.js`

```js
const epxress = require("express");
const app = epxress();
const bookRoutes = require("./routes/bookRoute");
app.use(epxress.json());
// 👇 Mount book routes on /books
app.use("/books", bookRoutes);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

## 📅 Day 12 – delete() & update()

1. controller/`bookController.js`

```js
// DELETE
const deleteBook = async (req, res) => {
  // Access param for deletion throughout `id`
  const { id } = req.params;
  try {
    const deleted = await books.destroy({ where: { id } });

    if (deleted) {
      res.status(200).json({ message: "Book deleted successfully!" });
    } else {
      res.status(404).json({ error: "Book not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete book." });
  }
};

// UPDATE
const updateBook = async (req, res) => {
  const { id } = req.params;
  const { bookName, bookPrice, bookGenre, bookAuthor } = req.body;

  try {
    const updated = await books.update(
      { bookName, bookPrice, bookGenre, bookAuthor },
      { where: { id } }
    );

    if (updated[0] > 0) {
      res.status(200).json({ message: "Book updated successfully!" });
    } else {
      res.status(404).json({ error: "Book not found or no change made." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update book." });
  }
};
```
