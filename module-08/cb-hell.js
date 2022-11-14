/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
 */

 function timeout(ms, callback) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
      callback();
    }, ms);
  });
}

const timeout1 = (ms = 1000) => new Promise((resolve)=>setTimeout(resolve, ms));

function generateRandomNumber() {
  return Math.floor(Math.random() * 40);
}

const generateRandomNumber1 = ()=> Math.floor(Math.random() * 40);

function generateData(callback) {
  timeout(1000, function () {
    const data = Array.from({ length: 20 }, generateRandomNumber);
    callback(data);
  });
}


  const generateData1 = async () => {
    await timeout1(1000,()=>{});
    const data = Array.from({ length: 20 }, generateRandomNumber1);
    return data;
  }

function convertToFeet(meters, callback) {
  const feet = meters * 3.2808;
  timeout(3500, function () {
    callback(feet);
  });
}

 const convertToFeet1 = async (meters) => {
    const feet = meters * 3.2808;
    timeout1(3500, function () {
      callback(feet);
    });
    await timeout1(3500);
    logResult1(meters, feet)
  }

function processData(data, callback) {
  data.map(function (value) {
    callback(value);
  });
}


const processData1 = async (data) => {
  await Promise.all(data.map(value => convertToFeet1(value))); 
}

function logResult(meters, feet) {
  console.log(`Converted ${meters}m to ${feet}ft`);
}

const logResult1 = (meters, feet) => {
  console.log(`Converted ${meters}m to ${feet}ft`);
}

/*function main() {
  console.log("Start");
  generateData(function (data) {
    processData(data, function (value) {
      convertToFeet(value, function (result) {
        logResult(value, result);
      });
    });
  });
  console.log("Finish");
}
main();*/

const main = async() => {

  console.log("Start");
  const data = await generateData1()
  await processData1(data)

  console.log("Finish");

}

main();

