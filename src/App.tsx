import React from "react";

function App() {
  function displaySum(name: string, age: number) {
    return name + " " + age;
  }

  interface IName {
    firstName: string;
    lastname: string;
  }

  //declare object

  interface IPerson {
    name: IName;
  }

  const SantonaData: IPerson = {
    name: {
      firstName: "Santona",
      lastname: "Subedi",
    },
  };

  return <div>{displaySum("Santona", 25)}</div>;
}

export default App;
