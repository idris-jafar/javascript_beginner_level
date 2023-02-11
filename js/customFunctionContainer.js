// LocalStorage ve SessionStorage emeliyyatlari ucun - CLASS
class MyStorage {
  #keyPrefixLocal = "myLocSt_";

  constructor() {
  }

  getLocalValue(keyword) {
    let value = window.localStorage.getItem(keyword);
    return JSON.parse(value);
  }

  removeLocalKey(keyword) {
    window.localStorage.removeItem(keyword);
  }

  keyLocalIsExist(keyword) {
    let value = this.getLocalValue(keyword);
    return value === null ? false : true;
  }

  setLocalValue(keyword, value) {
    let textValue = JSON.stringify(value);
    window.localStorage.setItem(keyword, textValue);
  }

  #generateLocalKey(keyword) {
    return `${this.#keyPrefixLocal}${keyword}`;
  }
}

////////////////////////////////////////////////////////////
// LocalStorage ve SessionStorage emeliyyatlari ucun - CLASS

let CustomStorage = {
  keyPrefixLocal: "myLocSt_",
  getLocalValue: function (keyword) {
    let generatedKey = this.generateLocalKey(keyword);
    let value = window.localStorage.getItem(generatedKey);
    return JSON.parse(value);
  },
  removeLocalKey: function (keyword) {
    let generatedKey = this.generateLocalKey(keyword);
    window.localStorage.removeItem(generatedKey);
  },
  keyLocalIsExist: function (keyword) {
    let value = this.getLocalValue(keyword);
    return value === null ? false : true;
  },
  setLocalValue: function (keyword, value) {
    let generatedKey = this.generateLocalKey(keyword);
    let textValue = JSON.stringify(value);
    window.localStorage.setItem(generatedKey, textValue);
  },
  generateLocalKey: function (keyword) {
    return `${this.keyPrefixLocal}${keyword}`;
  },
};


class Idris extends MyStorage
{
}

class Ilkin
{

}