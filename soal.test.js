const calculateParkingFee = require('./soal');

describe("calculateParkingFee", () => {

    it("should return 'Invalid vehicle type.' when vehicleType is invalid", () => {
        // given
        const vehicleType = 'bus';
        const duration = 5;

        // when
        const result = calculateParkingFee(vehicleType, duration);

        // then
        const expectedResult = 'Invalid vehicle type.';
        expect(result).toBe(expectedResult);
    });

    // it("should not be case sensitive for vehicleType", () => {
    //     // given
    //     const vehicleType1 = 'Car';
    //     const vehicleType2 = 'Bike';
    //     const duration = 2;

    //     // when
    //     const result1 = calculateParkingFee(vehicleType1, duration);
    //     const result2 = calculateParkingFee(vehicleType2, duration);

    //     // then
    //     expect(result1).toBe('Rp 8.000');
    //     expect(result2).toBe('Rp 3.000');
    // });


    // it("should return 'Rp 11.000' when vehicleType = 'car' and duration = 3", () => {
    //     // given
    //     const vehicleType = 'car';
    //     const duration = 3;

    //     // when
    //     const result = calculateParkingFee(vehicleType, duration);

    //     // then
    //     const expectedResult = 'Rp 11.000';
    //     expect(result).toBe(expectedResult);
    // });

    // it("should return 'Rp 2.000' when vehicleType = 'bike' and duration = 1", () => {
    //     // given
    //     const vehicleType = 'bike';
    //     const duration = 1;

    //     // when
    //     const result = calculateParkingFee(vehicleType, duration);

    //     // then
    //     const expectedResult = 'Rp 2.000';
    //     expect(result).toBe(expectedResult);
    // });

    // it("should return 'Rp 92.000' when vehicleType = 'car' and duration = 27", () => {
    //     // given
    //     const vehicleType = 'car';
    //     const duration = 27;

    //     // when
    //     const result = calculateParkingFee(vehicleType, duration);

    //     // then
    //     const expectedResult = 'Rp 92.000';
    //     expect(result).toBe(expectedResult);
    // });


    // it("should return 'Rp 8.000' when vehicleType = 'car' and duration = 1.2 (rounded up)", () => {
    //     // given
    //     const vehicleType = 'car';
    //     const duration = 1.2;

    //     // when
    //     const result = calculateParkingFee(vehicleType, duration);

    //     // then
    //     const expectedResult = 'Rp 8.000';
    //     expect(result).toBe(expectedResult);
    // });
});
