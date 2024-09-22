function ConvertHandler() {

  const numRegex = /^(\d*\.?\d*)(\/)?(\d*\.?\d*)?([a-zA-Z]*)$/g;

  this.getNum = function (input) {
    let result;

    let firstNum = input.replace(numRegex, "$1");
    let div = input.replace(numRegex, "$2");
    let secondNum = input.replace(numRegex, "$3");
    // console.log("firstNum", firstNum, "div", div, "secondNum", secondNum);
    if (firstNum === "") {
      firstNum = "1";
    };
    if (!div) {
      div = "/";
    };
    if (secondNum === "") {
      secondNum = "1";
    };
    console.log("firstNum", firstNum, typeof firstNum);
    console.log("secondNum", secondNum, typeof secondNum);
    let parsedFirstNum = parseFloat(firstNum);
    let parsedSecondNum = parseFloat(secondNum);
    console.log("parsedFirstNum", parsedFirstNum, typeof parsedFirstNum);
    console.log("parsedSecondNum", parsedSecondNum, typeof parsedSecondNum);
    if (isNaN(parsedFirstNum) || isNaN(parsedSecondNum)) {
      result = "invalid number";
      console.log(result);
      return result;
    } else {
      result = eval(`${parsedFirstNum} ${div} ${secondNum}`);
      // console.log("result", result, typeof result);
      // if (isNaN(result)) {
      // result = "invalid number";
      // console.log(result);
      // return result
      // } else {
      console.log("eval result", result, typeof result);
      return result;
      // }
    }
  };

  this.getUnit = function (input) {
    const validUnits = ["mi", "km", "l", "gal", "kg", "lbs"]
    let result;

    let unit = input.replace(numRegex, "$4").toLowerCase();
    if (!validUnits.includes(unit)) {
      result = "invalid unit";
    } else if (unit === "l") {
      result = "L";
    } else {
      result = unit;
    }
    return result;
  };

  this.getReturnUnit = function (initUnit) {
    let result;
    switch (initUnit) {
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
      case "gal":
        result = "L";
        break;
      case "L":
        result = "gal";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      default:
        result = "invalid unit";
        break;

    }

    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;
    switch (unit) {
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometers";
        break;
      case "gal":
        result = "gallons";
        break;
      case "L":
        result = "liters ";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
      default:
        result = "invalid unit";
        break;
    }
    return result;
  };

  this.convert = function (initNum, initUnit) {
    let result;
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    switch (initUnit) {
      case "mi":
        result = `${initNum * miToKm}`; //km
        break;
      case "km":
        result = `${miToKm / initNum}`; //mi
        break;
      case "gal":
        result = `${galToL * initNum}`; //L
        break;
      case "L":
        result = `${initNum / galToL  }`; //gal
        break;
      case "lbs":
        result = `${lbsToKg * initNum}`; //kg
        break;
      case "kg":
        result = `${initNum / lbsToKg }`; //lbs
        break;
      default:
        result = "something went wrong";
        break;
    }

    return parseFloat(result).toFixed(5);
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };

}

module.exports = ConvertHandler;
