module.exports = function () {
    var faker = require('faker');
    var _ = require('lodash');

    return {
        user: {
            id: 0,
            firstName: "Andrew",
            lastName: "Luck"
        },
        customers: _.times(20, function (n) {
            return {
                id: n,
                name: faker.name.findName()
            }
        })
    }
};

