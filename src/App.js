import './App.css';
import List from "./components/List";
import InputList from './components/InputList';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([]);

  const saveRecord = (item) => {
    setList([
      ...list,
      item
    ]);
  }

  const deleteRecord = (index) =>{
    let newList = list.filter(( _ , idx) => index !== idx );
    setList(newList);
  }
  
  return (

    <div className="container w-auto">
      <div className="container ml-10 mt-10 w-2/4 border-none">
      <div className="container  bg-white w-auto " >
        <div>
          <div className="p-5 bg-blue-500 text-white text-xl">
            Form
          </div>
        </div>
        <div>
          <InputList saveRecord={saveRecord} />
        </div>
      </div>
      <div className="container border-black ">
        <List list={list} deleteRecord={deleteRecord} />
      </div>
      </div>
    </div>

  );
}


//ml-10 mt-10 border border-solid border-black  p-5
export default App;
<div className="container bg-blue-600 w-auto h-auto p-10">
  Form
</div>