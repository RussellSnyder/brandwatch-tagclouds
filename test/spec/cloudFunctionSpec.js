describe("RandomHex", function() {
    var min = '00';
    var mid = '99';
    var max = 'ff';

  it("Should be able to create a Hex", function() {
    expect(randomHex(max, max)).toEqual(max);
  });
  it("Should give a Hex greater than min given", function() {
    expect(randomHex(mid, max)).toBeGreaterThan(mid);
    expect(randomHex(min, max)).toBeGreaterThan(min);
    expect(randomHex(min, mid)).toBeGreaterThan(min);
  });
  it("Should give a Hex less than the max given", function() {
    expect(randomHex(mid, max)).toBeLessThan(max);
    expect(randomHex(min, max)).toBeLessThan(max);
    expect(randomHex(min, mid)).toBeLessThan(mid);
  });
  it("Should return a two digit Hex", function() {
    expect(randomHex(mid, max).length).toEqual(2);
    expect(randomHex(min, max).length).toEqual(2);
    expect(randomHex(min, mid).length).toEqual(2);
  });

});

// - A topic with a sentiment score > 60 should be displayed in green
// - A topic with a sentiment score < 40 should be displayed in red
// - Other topics should be displayed in grey

describe("giveColor function - relies on randomHex", function() {
    var low_score = 20;
    var mid_score = 50;
    var high_score = 170;
    var green_min = '00fc00';
    var green_max = '02ff04';
    var red_min = 'fc0000';
    var red_max = 'ff0303';
    var grey_min = 'aaaaaa';
    var grey_max = 'cccccc';

  it("A topic with a sentiment score > 60 should be displayed in green", function() {
    expect(giveColor(high_score)).toBeLessThan(green_max);
    // expect(giveColor(high_score)).toBeGreaterThan(green_min).toBeTruthy();
  });
  it("A topic with a sentiment score < 40 should be displayed in red", function() {
    expect(giveColor(low_score)).toBeLessThan(red_max);
    expect(giveColor(low_score)).toBeGreaterThan(red_min);
  });
  it("A topic with a sentiment score between 40 and 60 should be displayed in grey", function() {
    expect(giveColor(mid_score)).toBeLessThan(grey_max);
    expect(giveColor(mid_score)).toBeGreaterThan(grey_min);
  });
  it("A return colol should always be 6 digits long", function() {
    expect(giveColor(mid_score).length).toBe(6);
    expect(giveColor(low_score).length).toBe(6);
    expect(giveColor(high_score).length).toBe(6);
  });
});

describe("returnNegOrPostive function", function() {
  it("Should return a number less than 2", function() {
    expect(returnNegOrPostive()).toBeLessThan(2);
  });
  it("Should return a number greater than -2", function() {
    expect(returnNegOrPostive()).toBeGreaterThan(-2);
  });
  it("should return the same absolute value of the number put in", function() {
    expect(Math.abs(5 * returnNegOrPostive())).toBe(5);
  });
  it("shouldn't return 0", function() {
    expect(returnNegOrPostive()).not.toBe(0);
  });
})

// - Each topic should have one of 6 different text sizes, 
// with the most popular topics largest, and least popular smallest

describe("fitIntoSixFontSizes(size, startFontSize, multiple) : Each topic should have one of 6 different text sizes, with the most popular topics largest, and least popular smallest", function() {
  var size_small = 10;
  var size_medium = 30;
  var size_large = 100;
  var startFontSize_small = 10;
  var startFontSize_medium = 30;
  var startFontSize_large = 100;
  var multiple_small = 0.1;
  var multiple_medium = 2;
  var multiple_large = 3;

  it("Small input always smaller then medium input if other factors are the same", function() {
    expect(fitIntoSixFontSizes(size_small, startFontSize_small, multiple_small))
      .toBeLessThan(fitIntoSixFontSizes(size_medium, startFontSize_small, multiple_small));
  });
  it("Medium input always smaller then large input if other factors are the same", function() {
    expect(fitIntoSixFontSizes(size_medium, startFontSize_small, multiple_small))
      .toBeLessThan(fitIntoSixFontSizes(size_large, startFontSize_small, multiple_small));
  });
  it("Large input always larger then medium input if other factors are the same", function() {
    expect(fitIntoSixFontSizes(size_large, startFontSize_small, multiple_small))
      .toBeGreaterThan(fitIntoSixFontSizes(size_medium, startFontSize_small, multiple_small));
  });
  it("smaller startFontSize, with same size and multiple, should return smaller", function() {
    expect(fitIntoSixFontSizes(size_small, startFontSize_small, multiple_small))
      .toBeLessThan(fitIntoSixFontSizes(size_small, startFontSize_medium, multiple_small));
  });
  it("larger startFontSize, with same size and multiple, should return larger", function() {
    expect(fitIntoSixFontSizes(size_small, startFontSize_large, multiple_small))
      .toBeGreaterThan(fitIntoSixFontSizes(size_small, startFontSize_medium, multiple_small));
  });
  it("given the same size input and startFontSize, a higher multiple should return a larger number", function() {
    expect(fitIntoSixFontSizes(size_small, startFontSize_large, multiple_small))
      .toBeLessThan(fitIntoSixFontSizes(size_small, startFontSize_large, multiple_medium));
  });
  it("given the same size input and startFontSize, a lower multiple should return a lower number", function() {
    expect(fitIntoSixFontSizes(size_small, startFontSize_large, multiple_large))
      .toBeGreaterThan(fitIntoSixFontSizes(size_small, startFontSize_large, multiple_medium));
  });

})
