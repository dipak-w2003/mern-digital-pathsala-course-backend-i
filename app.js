const epxress = require("express");
const app = epxress();
const bookRoutes = require("./routes/bookRoute");
const cors = require("cors");

app.use(
  cors({
    // origin:"*",
    origin: "http://localhost:5173",
  })
);
app.use(epxress.json());
// 👇 Mount book routes on /books
app.use("/api/books", bookRoutes);

app.listen(4000, () => {
  console.log("http://localhost:4000");
});
