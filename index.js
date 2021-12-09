const employee = {
    name : "Sam" ,
    streetAddress : "11 Broadway" };

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
      ...obj,
      [key]: value,
    };
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    
    return obj;
  }

 function deleteFromEmployeeByKey(obj, key) {
     const newEmployee = {
         ...employee
     };
     delete newEmployee.name;
     return newEmployee;
     
 }
 
 function destructivelyDeleteFromEmployeeByKey(obj, key) {
     delete employee.name;
     return employee
 }