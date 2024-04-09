import express from "express";
import payload from "payload";
import path from "path";
require("dotenv").config();
const app = express();

app.use("/images", express.static(path.join(__dirname, "./images")));
// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

app.get("/blogs", async (req, res) => {
  const blogs = await payload.find({
    collection: "blogs",
  });

  res.json(blogs);
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Add your own express routes here

  app.listen(3000);
};

start();
