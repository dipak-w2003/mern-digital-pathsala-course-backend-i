# Course : Digital Pathsala

### DAY : 10

#### 1. Connection

- supabse ('pg' driver)
- orm ('sequelize')
- database connection

```bash
npm install pg sequelize
```

#### 2. .env & access it anywhere in 'JS' file

```.env
#src/.evn
cs = postgresql://postgres.cututirdybwovnlzwory:<password>@aws-0-ap-south-1.pooler.supabase.com:6543/postgres
data = "Apple"
```

```js
// /database/connection.js
const sequelize = new Sequelize(process.env.cs);
```

- alternative -> `dotenv`.
