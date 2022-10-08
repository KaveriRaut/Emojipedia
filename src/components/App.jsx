import React from "react";
import emojipedia from "../emojipedia"
import Entry from "./Entry.jsx";

function createEmojipedia(info){
  return(
    <Entry
      key={info.id}
      emoji={info.emoji}
      name={info.name}
      description={info.meaning}
    >
    </Entry>
  )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">

        {emojipedia.map(createEmojipedia)} 

        {/* <Entry 
        emoji={emojipedia[0].emoji}
        name={emojipedia[0].name}
        description={emojipedia[0].meaning}
        ></Entry>

        <Entry 
        emoji={emojipedia[1].emoji}
        name={emojipedia[1].name}
        description={emojipedia[1].meaning}
        ></Entry>

        <Entry 
        emoji={emojipedia[2].emoji}
        name={emojipedia[2].name}
        description={emojipedia[2].meaning}
        ></Entry> */}

      </dl>
    </div>
  );
}

export default App;
