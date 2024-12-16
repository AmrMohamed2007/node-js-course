const prompt = require("prompt")
const ms = require("ms")

var schema = {
    properties: {
      count: {
        type: "number",
        name: "Number",
        description:"type number of unit",
        required: true
      },
      units: {
        type: "string",
        name: "Unit",
        description:"type Unit",
        required: true
      },
    }
  };

  //
  // Start the prompt
  //
  prompt.start();

  //
  // Get two properties from the user: name, password
  //
  prompt.get(schema, function (err, result) {
    //
    // Log the results.
    //
    const arr = ["d", "m", "s"]
    if(!arr.includes(result.units))
        return;
    console.log(`${result.count}${result.units}`);
    
    console.log(`The Ms is : ${ms(`${result.count}${result.units}`)}`);
    
    
  });