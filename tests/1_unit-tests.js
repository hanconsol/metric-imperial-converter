const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function () {
    suite('convertHandler.getNum', () => {
        test(' should correctly read a whole number input', () => {
            assert.equal(convertHandler.getNum("22mi"), 22, 'returns whole number')
        });
        test('should correctly read a decimal number input', () => {
            assert.equal(convertHandler.getNum("32.7kg"), 32.7, 'returns decimal number ')
        });
        test('should correctly read a fractional input', () => {
            assert.equal(convertHandler.getNum("30/5l"), 6, 'returns result of division')
        });
        test(' should correctly read a fractional input with a decimal.', () => {
            assert.equal(convertHandler.getNum("2.5/.5l"), 5, 'returns result of fractional decimal division')
        });
        test('should correctly return an error on a double-fraction (i.e. 3/2/3)', () => {
            assert.equal(convertHandler.getNum("3/2/3kg"), 'invalid number', 'returns invalid number on multiple divisions')
        });
        test('should correctly default to a numerical input of 1 when no numerical input is provided', () => {
            assert.equal(convertHandler.getNum("kg"), 1, 'returns default value of 1')
        });
    });
    suite('convertHandler.getUnit', () => {
        test('should correctly read each valid input unit.', () => {
            assert.equal(convertHandler.getUnit("30mi"), 'mi', 'returns input unit');
            assert.equal(convertHandler.getUnit("30km"), 'km', 'returns input unit');
            assert.equal(convertHandler.getUnit("30gal"), 'gal', 'returns input unit');
            assert.equal(convertHandler.getUnit("30l"), 'L', 'returns input unit');
            assert.equal(convertHandler.getUnit("30lbs"), 'lbs', 'returns input unit');
            assert.equal(convertHandler.getUnit("30kg"), 'kg', 'returns input unit');
        });
        test(' should correctly return an error for an invalid input unit.', () => {
            assert.equal(convertHandler.getUnit("30/5lim"), 'invalid unit', 'returns invalid unit if no unit match')
        });
    });
    suite("convertHandler.getReturnUnit", () => {
        test('should return the correct return unit for each valid input unit', () => {

            assert.equal(convertHandler.getReturnUnit("km"), 'mi', 'returns return unit');
            assert.equal(convertHandler.getReturnUnit("gal"), 'L', 'returns return unit');
            assert.equal(convertHandler.getReturnUnit("mi"), 'km', 'returns return unit');
            assert.equal(convertHandler.getReturnUnit("L"), 'gal', 'returns return unit');
            assert.equal(convertHandler.getReturnUnit("lbs"), 'kg', 'returns return unit');
            assert.equal(convertHandler.getReturnUnit("kg"), 'lbs', 'returns return unit');
        });
    });
    suite('convertHandler.spellOutUnit', () => {
        test(' should correctly return the spelled-out string unit for each valid input unit.', () => {

            assert.equal(convertHandler.spellOutUnit("km"), 'kilometers', 'returns spellout unit');
            assert.equal(convertHandler.spellOutUnit("gal"), 'gallons', 'returns spellout unit');
            assert.equal(convertHandler.spellOutUnit("mi"), 'miles', 'returns spellout unit');
            assert.equal(convertHandler.spellOutUnit("L"), 'liters', 'returns spellout unit');
            assert.equal(convertHandler.spellOutUnit("lbs"), 'pounds', 'returns spellout unit');
            assert.equal(convertHandler.spellOutUnit("kg"), 'kilograms', 'returns spellout unit');
        });
    });
    suite('convertHandler.convert', () => {
        test('should correctly convert gal to L', () => {
            assert.equal(convertHandler.convert(1, "gal"), 3.78541, '1 gal equals 3.78541 liters')
        });
        test('should correctly convert L to gal', () => {
            assert.equal(convertHandler.convert(3.78541, "L"), 1, '3.78541 liters equals 1 gal')
        });
        test('should correctly convert mi to km', () => {
            assert.equal(convertHandler.convert(1, "mi"), 1.60934, '1 mi equals 1.60934 km')
        });
        test('should correctly convert km to mi', () => {
            assert.equal(convertHandler.convert(1.60934, "km"), 1, '1.60934 km equals 1 mi')
        });
        test('should correctly convert lbs to kg', () => {
            assert.equal(convertHandler.convert(1, "lbs"),  0.45359, '1 lbs equals  0.45359 kg')
        });
        test('should correctly convert kg to lbs', () => {
            assert.equal(convertHandler.convert( 0.45359, "kg"), 1, ' 0.45359 kg equals 1 lbs')
        });


    });
});