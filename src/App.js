import './App.css';
import List from "./components/List";
import InputList from './components/InputList';
import { useState, useEffect } from 'react';
import { db } from './firebase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify'

function App() {
  const [list, setList] = useState([]);
  const [record,setRecord] = useState({
    id: "",
    name: "",
    language: "",
    level: "",
  });
  const [isAdd, setIsAdd] = useState(true);

  const saveRecord = async (record) => {
    if(record.id === ""){
      await db.collection('list').doc().set(record);
      toast('New record added',{
        type:'success'
      });
    }else{
      await db.collection('list').doc(record.id).update(record);
      toast('Record Updated',{
        type:'success'
      });
      setIsAdd(true);
    }
  }

  const deleteRecord = (id) => {
    if( window.confirm('Are you sure you want to delete this record?') ){
        db.collection('list').doc(id).delete();
        toast('Record deleted',{
          type:'error'
        });
    }
  }

  const updateRecord = (record) => {
      setRecord(record);
  }

  const getList = async () => {
    db.collection('list').onSnapshot((querySnapshot) => {
      const records = [];
      querySnapshot.forEach(doc => {
        records.push({...doc.data(), id:doc.id});
      });
      setList(records);
    });
  }

  useEffect(() => {
    getList();
  }, []);

  return (

    <div className="container w-auto">
      <div className="container flex justify-center">
        <div className="container m-10 w-2/4 border-none ">
          <div className="container  bg-white w-auto " >
            <div>
              <div className="p-5 bg-blue-500 text-white text-xl">
                Form
            </div>
            </div>
            <div>
              <InputList
                saveRecord={saveRecord}
                setRecord={setRecord}
                record={record}
                setIsAdd={setIsAdd}
                isAdd={isAdd}  />
            </div>
          </div>
          <div className="container border-black ">
            <List list={list} deleteRecord={deleteRecord} updateRecord={updateRecord} />
          </div>
        </div>
        <ToastContainer/>
      </div>
    </div>

  );
}


//ml-10 mt-10 border border-solid border-black  p-5
export default App;
<div className="container bg-blue-600 w-auto h-auto p-10">
  Form
</div>