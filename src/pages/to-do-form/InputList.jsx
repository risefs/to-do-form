import React, { useEffect } from "react";
import { db } from "../../firebase";

const InputList = ({
  saveRecord,
  setRecord,
  record,
  setIsAdd,
  isAdd,
  clearForm,
}) => {

    const style = {
      input: "p-1 ml-3 bg-blue-100 rounded-md",
      button: "rounded-sm bg-green-500 p-2 m-2 text-white w-2/4 border-none",
      label: "font-bold text-md p-4",
    };

    
  const handlerChange = (event) => {
    setRecord({
      ...record,
      [event.target.name]: event.target.value,
    });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    await saveRecord(record);
    clearForm();
  };

  const getRecord = async (id) => {
    const collection = await db.collection("list").doc(id);
    collection.get().then((record) => {
      setRecord(record.data());
    });
  };

  return (
    <div className="container">
      <form onSubmit={handlerSubmit}>
        <div>
          <div className="container p-2">
            <label className={style.label}>Task</label>
            <br />
            <input
              onChange={handlerChange}
              type="text"
              name="name"
              value={record.name || ""}
              className={style.input}
            />
          </div>

          <div className="container p-2 text-center">
            <button className={style.button} type="submit">
              {isAdd ? "Add" : "Update"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InputList;
