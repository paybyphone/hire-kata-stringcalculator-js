'use strict'

import {StringCalculator} from './main';

var stringCalculator;

beforeAll(() => {
  stringCalculator = new StringCalculator();
});

describe('1. StringCalculator.calculate(...)', () => {

    //Sample unit test
    it('should . . .', () => {
        expect(1+2).toBe(3);
    });

});

// List of available Jasmine Matchers
//https://github.com/JamieMason/Jasmine-Matchers#matchers