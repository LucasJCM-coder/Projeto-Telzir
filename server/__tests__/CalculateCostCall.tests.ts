import CalculateCostsCall from '../src/utils/CalculateCostCall';

test("tests if it return result expect when values are string numeric", () => {
    const result = CalculateCostsCall('2.7', '31', '30');

    const correct_return = {
        custoComPlano: "2.97",
        custoSemPlano: "83.70"
    };

    expect(result).toEqual(correct_return);
});


test("tests if it return result expect when values are string numeric and minutes are less when the plan ", () => {
    const result = CalculateCostsCall('2.7', '31', '60');

    const correct_return = {
        custoComPlano: "0.00",
        custoSemPlano: "83.70"
    };

    expect(result).toEqual(correct_return);
});


test("tests if it return result expect when values are string numeric and minutes are negative ", () => {
    const result = CalculateCostsCall('2.7', '-31', '60');

    const correct_return = {
        custoComPlano: NaN,
        custoSemPlano: NaN
    };

    expect(result).toEqual(correct_return);
});

test("tests if it return result expect when values are string numeric and plan are negative ", () => {
    const result = CalculateCostsCall('2.7', '31', '-60');

    const correct_return = {
        custoComPlano: NaN,
        custoSemPlano: NaN
    };

    expect(result).toEqual(correct_return);
});

test("tests if it return result expect when values are string float number", () => {
    const result = CalculateCostsCall('2.7', '31.6', '60');

    const correct_return = {
        custoComPlano: "0.00",
        custoSemPlano: "83.70"
    };

    expect(result).toEqual(correct_return);
})

test("tests if it return NaN when values are string with words in minute", () => {
    const result = CalculateCostsCall('2.7', 'wordHere', '60');

    const correct_return = {
        custoComPlano: NaN,
        custoSemPlano: NaN
    };

    expect(result).toEqual(correct_return);
});

test("tests if it return NaN when values are string with words and numbers in minute", () => {
    const result = CalculateCostsCall('2.7', 'word32Here', '60');

    const correct_return = {
        custoComPlano: NaN,
        custoSemPlano: NaN
    };

    expect(result).toEqual(correct_return);
});

test("tests if it return NaN when values are string with words and numbers in plan", () => {
    const result = CalculateCostsCall('2.7', '28', '6a0');

    const correct_return = {
        custoComPlano: NaN,
        custoSemPlano: NaN
    };

    expect(result).toEqual(correct_return);
});

test("tests if it return NaN in custoComPlano when plan not exists", () => {
    const result = CalculateCostsCall('2.7', '28', '5');

    expect(result['custoComPlano']).toBeNaN();
});

test("tests if it return NaN in custoComPlano when costs if string with words", () => {
    const result = CalculateCostsCall('a1b2c3d4', '28', '30');

    expect(result['custoComPlano']).toBeNaN();
});