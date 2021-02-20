const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

const dirPathProducts = path.join(__dirname, "../products");
const dirPathMainPageSections = path.join(__dirname, "../mainPageSections");
let productslist = [];
let mainPageSectionsList = [];

const months = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  10: "October",
  11: "November",
  12: "December",
};

const formatDate = (date) => {
  const datetimeArray = date.split("T");
  const dateArray = datetimeArray[0].split("-");
  const timeArray = datetimeArray[1].split(":");
  const month = dateArray[1];
  const monthName = months[dateArray[1]];
  const day = dateArray[2];
  const year = dateArray[0];
  const time = `${timeArray[0]}:${timeArray[1]}`;

  return { month: month, monthName: monthName, day: day, year: year, time: time };
};

// const getTimeStemp = (metadata) => {
//   const parsedDate = metadata.date ? formatDate(metadata.date) : new Date();
//   const datestring = `${parsedDate["year"]}-${parsedDate["month"]}-${parsedDate["day"]}T${parsedDate["time"]}:00`;
//   const date = new Date(datestring);
//   const timestamp = date.getTime() / 1000;
//   return timestamp;
// };

const getProducts = () => {
  fs.readdir(dirPathProducts, (err, files) => {
    if (err) {
      return console.log("Failed to list contents of directory: " + err);
    }
    let ilist = [];
    let tempField = "";
    let isTempArr = false;
    files.forEach((file, i) => {
      let obj = {};
      let post;
      fs.readFile(`${dirPathProducts}/${file}`, "utf8", (err, contents) => {
        const getMetadataIndices = (acc, elem, i) => {
          if (/^---/.test(elem)) {
            acc.push(i);
          }
          return acc;
        };
        const parseMetadata = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1]);
            metadata.forEach((line, index) => {
              try {
                if (metadata[index + 1].includes("-") && !isTempArr) {
                  isTempArr = true;
                  tempField = line.split(":")[0];
                } else if (
                  metadata[index + 1].includes("-") &&
                  metadata[index - 1].includes("-") &&
                  !metadata[index].includes("-")
                ) {
                  isTempArr = true;
                  tempField = line.split(":")[0];
                } else if (metadata[index].includes("-")) {
                  isTempArr = true;
                } else {
                  isTempArr = false;
                }
              } catch (e) {}

              if (isTempArr) {
                if (line.split("- ")[1]) {
                  if (typeof obj[tempField] !== "object") {
                    obj[tempField] = [];
                  }
                  obj[tempField].push(line.split("- ")[1]);
                }
              } else {
                obj[line.split(": ")[0]] = line.split(": ")[1];
              }
            });
            return obj;
          }
        };
        const parseContent = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            lines = lines.slice(metadataIndices[1] + 1, lines.length);
          }
          return lines.join("\n");
        };
        const lines = contents.split("\n");
        const metadataIndices = lines.reduce(getMetadataIndices, []);
        const metadata = parseMetadata({ lines, metadataIndices });
        const content = parseContent({ lines, metadataIndices });
        let currId = uuidv4();
        post = {
          id: currId,
          header: metadata.header ? metadata.header : "No header given",
          tags: metadata.tags,
          featuresList: metadata.featuresList,
          typeOptionsList: metadata.typeOptionsList,
          styleList: metadata.styleList,
          shortText: metadata.shortText ? metadata.shortText : "No shortText given",
          imageSm: metadata.imageSm,
          imageLg: metadata.imageLg,
          categorie: metadata.categorie,
          url: `/itempage/${currId}`,
          content: content ? content : "No content given",
        };
        productslist.push(post);
        ilist.push(i);
        if (ilist.length === files.length) {
          const sortedList = productslist.sort((a, b) => {
            return a.id < b.id ? 1 : -1;
          });
          let data = JSON.stringify(sortedList);
          fs.writeFileSync("src/products.json", data);
        }
      });
    });
  });
  return;
};

const getMainPageSections = () => {
  fs.readdir(dirPathMainPageSections, (err, files) => {
    if (err) {
      return console.log("Failed to list contents of directory: " + err);
    }
    let ilist = [];
    let tempField = "";
    let isTempArr = false;
    files.forEach((file, i) => {
      let obj = {};
      let post;
      fs.readFile(`${dirPathMainPageSections}/${file}`, "utf8", (err, contents) => {
        const getMetadataIndices = (acc, elem, i) => {
          if (/^---/.test(elem)) {
            acc.push(i);
          }
          return acc;
        };
        const parseMetadata = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1]);
            metadata.forEach((line, index) => {
              try {
                if (metadata[index + 1].includes("-") && !isTempArr) {
                  isTempArr = true;
                  tempField = line.split(":")[0];
                } else if (
                  metadata[index + 1].includes("-") &&
                  metadata[index - 1].includes("-") &&
                  !metadata[index].includes("-")
                ) {
                  isTempArr = true;
                  tempField = line.split(":")[0];
                } else if (metadata[index].includes("-")) {
                  isTempArr = true;
                } else {
                  isTempArr = false;
                }
              } catch (e) {}

              if (isTempArr) {
                if (line.split("- ")[1]) {
                  if (typeof obj[tempField] !== "object") {
                    obj[tempField] = [];
                  }
                  obj[tempField].push(line.split("- ")[1]);
                }
              } else {
                obj[line.split(": ")[0]] = line.split(": ")[1];
              }
            });
            return obj;
          }
        };

        const lines = contents.split("\n");
        const metadataIndices = lines.reduce(getMetadataIndices, []);
        const metadata = parseMetadata({ lines, metadataIndices });
        let currId = uuidv4();
        post = {
          id: currId,
          title: metadata.title ? metadata.title : "No title given",
          paragraph: metadata.paragraph ? metadata.paragraph : "No paragraph given",
        };
        mainPageSectionsList.push(post);
        ilist.push(i);
        if (ilist.length === files.length) {
          const sortedList = mainPageSectionsList.sort((a, b) => {
            return a.id < b.id ? 1 : -1;
          });
          let data = JSON.stringify(sortedList);
          fs.writeFileSync("src/mainPageSections.json", data);
        }
      });
    });
  });
  return;
};

getProducts();
getMainPageSections();
