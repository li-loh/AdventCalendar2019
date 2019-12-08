
function calculateTotalFuelRequired(modules) {
    let totalFuelRequired = 0;
    modules.forEach(module => {
        totalFuelRequired += calculateFuelRequired(module);
    });
    return totalFuelRequired;
}

function calculateFuelRequired(mass) {

    let fuel = Math.floor(mass / 3) - 2;
    // 6 is the mass threshold at which we don't require additional fuel to lift
    return fuel <= 6 ? fuel : fuel + calculateFuelRequired(fuel);
}

exports.calculateTotalFuelRequired = calculateTotalFuelRequired;
