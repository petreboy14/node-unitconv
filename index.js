var baseUnits = {
  distance: 'meters'
};

var units = {
  miles: {
    type: 'distance',
    toBase: 1609.34
  }
};

exports.convert = function(from, unitsFrom, unitsTo) {
  if (units.hasOwnProperty(unitsFrom)) {
    var entry = units[unitsFrom];
    
    var base = from * entry.toBase;
    if (unitsTo !== baseUnits[entry.type]) {
      // Only do more conversion 
    }
    return base;
  } else {
    throw new Error('Unit: ' + unitsFrom + ' not found in list');
  }
};