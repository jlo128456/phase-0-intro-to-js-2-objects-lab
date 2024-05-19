// Write your solution in this file!
let employee =
{
    name: "John Doe",
    streetAddress: "123 Main st"
};
//Function to update employee object destructively
function updateEmployeeWithKeyAndValue(employee, key, value)
{
   return {
      ...employee,
      [key]: value
   };
}
//destructively update employee object
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
{
    employee[key] = value;
    return employee;
}
//non destructively delete object from employee with key
function deleteFromEmployeeByKey(employee, key)
{
    let newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}
// destructively delete object from employee with key
function destructivelyDeleteFromEmployeeByKey(employee, key)
{
    delete employee[key];
    return employee;
}