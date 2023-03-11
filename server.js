const express = require("express");

const path = require("path");

const multer = require("multer");

const mergePdfFunction = require("./pdfMerge");

const upload = multer({ dest: "uploads/" });

const app = express();

app.use("/static", express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/templates/index.html"));
});

app.post("/merge", upload.array("pdfs", 12), async (req, res, next) => {
  console.log(req.files);
  await mergePdfFunction(
    path.join(__dirname, req.files[0].path),
    path.join(__dirname, req.files[1].path)
  );
  res.redirect("http://localhost:1337/static/merged.pdf");
});

app.listen(1337, () => {
  console.log("Server is running at http://localhost:1337");
});
