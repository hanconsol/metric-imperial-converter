'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  let convertHandler = new ConvertHandler();

  app.route('/api/convert/').get((req, res) => {
    const { input } = req.query;
    console.log(req.query, input);


      // let numIn = convertHandler.testSplit(input);
      // console.log("numIn", numIn);
    //       console.log("remaining array after split", splitVal, typeof splitVal);


    let initNum = convertHandler.getNum(input);
    console.log("initNum", initNum);
    let initUnit = convertHandler.getUnit(input);
    console.log("initUnit from handler", initUnit);


    if (initNum === "invalid number" && initUnit === "invalid unit") {
      res.send("invalid number and unit");
    } else if (initNum === "invalid number") {
      res.send("invalid number");
    } else if (initUnit === "invalid unit") {
      res.send("invalid unit")
    } else {


      let returnUnit = convertHandler.getReturnUnit(initUnit);
      console.log("returnUnit from handler", returnUnit)

      let returnNum = convertHandler.convert(initNum, initUnit);
      console.log("returnNum from handler", returnNum, typeof returnNum);

      let initUnitString = convertHandler.spellOutUnit(initUnit);
      console.log("initUnitString", initUnitString);

      let returnUnitString = convertHandler.spellOutUnit(returnUnit);
      console.log("returnUnitString", returnUnitString);

      let string = convertHandler.getString(initNum, initUnitString, returnNum, returnUnitString);

      console.log(string);
      res.json({ initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: string });
      // res.json({result: result});
    }
  })

};
