import React, { useState } from "react";
import "./App.css";
import AddToList from "./components/AddToList";
import List from "./components/List";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}
function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name:"haider",
      age:23,
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw9x25JBKRoLilUesSAYcWIlR53nTtKBVVGVCNkCVcIin0Mpt71roaRIrMqhaiF5J0ah0&usqp=CAU",
      note:"string on the same team"

    }
  ]);
  return (
    <div className="App">
      <h1 >people Invited to my party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
