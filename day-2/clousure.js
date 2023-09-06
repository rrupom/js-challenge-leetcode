function makeFunc(value) {
  const name = "rakib";
  function displayName() {
    // console.log(name);
    console.log(value);
    value++;
  }

  return displayName;
}

const myFunc = makeFunc(10);
myFunc();
myFunc();
myFunc();
