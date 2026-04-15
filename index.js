//creating a function to combine users
function combineUsers(...args) {
//initialise retuned object
  const combinedObject = {
    users: []
  };
  //loop through args
  for (const arr of args) {
    combinedObject.users.push(...arr);
  }
  //add todays date
  const today = new Date();
  combinedObject.merge_date= today.toString('M/d/yyyy');

return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};