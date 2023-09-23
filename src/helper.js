export function unslugifyName(slug) {
  // Replace hyphens or underscores with spaces
  const originalName = slug.replace(/[-_]/g, " ");

  // Capitalize the first letter of each word
  const unslugifiedName = originalName.replace(
    /\w+/g,
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  return unslugifiedName;
}

import _ from "lodash";
import moment from "moment";

export function generateUniqueId(existingIds) {
  let newId;

  do {
    newId = _.random(1, 999999999); // Generate a random 4-digit number
  } while (_.includes(existingIds, newId)); // Check if the generated ID already exists in the array

  return newId;
}
export function extractIdsFromData(data) {
  const idArray = data.map((obj) => obj.id);
  return idArray;
}

export function removeDuplicateObjects(arr) {
  const idMap = {}; // Use an object to store the last object for each ID

  for (const obj of arr) {
    idMap[obj.id] = obj; // Update the last object for this ID
  }

  // Convert the object values back to an array to get the desired result
  const resultArray = Object.values(idMap);

  return resultArray;
}

export function downloadDataArrayAsText(dataArray, fileName) {
  const blob = new Blob([dataArray], { type: "text/plain" });

  const a = document.createElement("a");
  a.style.display = "none";
  a.href = URL.createObjectURL(blob);
  a.download = fileName;

  document.body.appendChild(a);
  a.click();

  window.URL.revokeObjectURL(a.href);
  document.body.removeChild(a);
}

export function downloadHTMLAsFile(htmlContent, fileName) {
  const blob = new Blob([htmlContent], { type: "text/html" });

  const a = document.createElement("a");
  a.style.display = "none";
  a.href = URL.createObjectURL(blob);
  a.download = fileName;

  document.body.appendChild(a);
  a.click();

  window.URL.revokeObjectURL(a.href);
  document.body.removeChild(a);
}
export function removeIdFromObjects(inputArray) {
  const outputArray = [];
  for (const obj of inputArray) {
    const newObj = { ...obj }; // Create a shallow copy of the object
    delete newObj.id; // Remove the 'id' key from the copy
    outputArray.push(newObj);
  }
  return outputArray;
}
export function filterObjectsBeforeDatefunctionfunction(
  objects,
  targetTimeStr
) {
  const targetTime = moment(targetTimeStr, "MMMM Do YYYY, h:mm:ss a");
  const filteredObjects = objects.filter((object) => {
    const objectTime = moment(object.time, "MMMM Do YYYY, h:mm:ss a");
    return objectTime.isAfter(targetTime);
  });
  return filteredObjects;
}

export function sortByTime(data) {
  // Sort the data array by time in descending order
  data.sort((a, b) => {
    const timeA = new Date(a.time);
    const timeB = new Date(b.time);
    
    return timeB - timeA;
  });

  return data;
}

