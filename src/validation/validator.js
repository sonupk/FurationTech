//_________________________________________request body validation_________________________________________
const isValidRequestBody = function (object) {
    return Object.keys(object).length > 0;
  };

  //_________________________________________Name  validation_________________________________________
const isValidName = function (name) {
    const regexForName = /^[A-Za-z ]+$/
    return regexForName.test(name);
  };

  //_________________________________________Description  validation_________________________________________
const isValidDescription = function (description) {
    const regexForDescription = /^[A-Za-z ]+$/
    return regexForDescription.test(description);
  };

  //_________________________________________Date Validation_________________________________________
const isValiddateofMfg = function (dateofMfg) {
    const dateRegex = /^\d{4}-(02-(0[1-9]|[12][0-9])|(0[469]|11)-(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))$/
    return dateRegex.test(dateofMfg)
  }

  //_________________________________________exporting part_________________________________________
module.exports = {  isValidRequestBody,isValidName,isValidDescription,isValiddateofMfg, }
