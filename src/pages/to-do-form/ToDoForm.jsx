import React from "react";
import List from "./List";
import InputList from "./InputList";
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { getTaskList } from "../../redux/ducks/taskDuck";

const ToDoForm = () => {
  const [list, setList] = useState([]);
  const [record, setRecord] = useState({});
  const [isAdd, setIsAdd] = useState(true);

  const taskStore = useSelector((store) => store.task);
  const taskList  = taskStore.tasks;
  
  const dispatch = useDispatch();

  const saveRecord = async () => {
    const date = moment(new Date()).format("DD/MM/YYYY, h:mm:ss a");

    const task = { ...record, create_date: date };
    console.log("task", task);
    if (!task.id) {
      await db.collection("list").doc().set(task);
      toast("New record added", {
        type: "success",
      });
    } else {
      await db.collection("list").doc(task.id).update(task);
      toast("Record Updated", {
        type: "success",
      });
      setIsAdd(true);
    }
    clearForm();
  };

  const deleteRecord = (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      db.collection("list").doc(id).delete();
      toast("Record deleted", {
        type: "error",
      });
    }
  };

  const getTaskRecord = (task) => {
    if (!!task.id) setIsAdd(false);
    setRecord(task);
  };

  const getList = async () => {
    db.collection("list").onSnapshot((querySnapshot) => {
      const records = [];
      querySnapshot.forEach((doc) => {
        records.push({ ...doc.data(), id: doc.id });
      });
      setList(records);
    });
  };

  const clearForm = () => {
    setRecord({});
  };

  useEffect(() => {
    getList();
    dispatch(getTaskList());
  }, []);

  return (
    <div className="container w-auto">
      <div className="container flex justify-center">
        <div className="container m-10 w-2/4 border-none ">
          <div className="container  bg-white w-auto ">
            <div>
              <div className="p-5 bg-blue-500 text-white text-xl">
                To Do - 300
              </div>
            </div>
            <div>
              <InputList
                saveRecord={saveRecord}
                setRecord={setRecord}
                record={record}
                setIsAdd={setIsAdd}
                isAdd={isAdd}
                clearForm={clearForm}
              />
            </div>
          </div>
          <div className="container border-black ">
            <List
              list={taskList}
              deleteRecord={deleteRecord}
              getTaskRecord={getTaskRecord}
            />
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};
export default ToDoForm;
