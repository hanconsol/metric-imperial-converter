'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  let convertHandler = new ConvertHandler();

  app.route('/api/convert/').get((req, res) => {
    const { input } = req.query;
    console.log(req.query, input);
    let initNum = convertHandler.getNum(input);
    console.log("initNum", initNum)
   
    let initUnit = convertHandler.getUnit(input);
    console.log("initUnit from handler", initUnit);

    let returnUnit = convertHandler.getReturnUnit(initUnit);
    console.log("returnUnit from handler", returnUnit)

    let returnNum = convertHandler.convert(initNum, initUnit);
    console.log("returnNum from handler", returnNum);

    let initUnitString = convertHandler.spellOutUnit(initUnit);
    console.log("initUnitString", initUnitString);

    let returnUnitString = convertHandler.spellOutUnit(returnUnit);
    console.log("returnUnitString", returnUnitString);

    let string = `${initNum} ${initUnitString} converts to ${returnNum} ${returnUnitString}`;

    console.log(string);
      res.json({initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnitString, string: string});
        // res.json({result: result});
    
  })

};
