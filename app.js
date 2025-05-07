const epxress = require("express");
const app = epxress();
const bookRoutes = require("./routes/bookRoute");
app.use(epxress.json());
// 👇 Mount book routes on /books
app.use("/books", bookRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
