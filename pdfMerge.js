const pdfMerge = require("pdf-merger-js");

const merger = new pdfMerge();

const mergePdfFunction = async (p1, p2) => {
  //console.log(p1, p2);
  await merger.add(p1);
  await merger.add(p2);

  await merger.save("public/merged.pdf");
};

module.exports = mergePdfFunction;
