import React, { useState, useEffect } from "react";

const InputList = (props) => {
  const [data, setData] = useState({
    id: "",
    name: "",
    language: "",
    level: "",
  });

  const { saveRecord,setRecord,record,setIsAdd,isAdd } = props;

  const handlerChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const clearForm = () => {
    setData({
      name: "",
      language: "",
      level: "",
    });
    setRecord(data);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    saveRecord(data);
    clearForm();
  };

  const style = {
    input: "p-1 ml-3 bg-blue-100 rounded-md",
    button: "rounded-sm bg-green-500 p-2 m-2 text-white w-2/4 border-none",
    label: "font-bold text-md p-4",
  };

  useEffect(() => {
    if(!record.id){
      clearForm();
    }else{
      setData(props.record);
      setIsAdd(false);
    }
  }, [record.id]);

  return (
    <div className="container">
      <form onSubmit={handlerSubmit}>
        <div>
          <div className="container p-2">
            <label className={style.label}>Name</label>
            <br />
            <input
              onChange={handlerChange}
              type="text"
              name="name"
              value={data.name}
              className={style.input}
            />
          </div>
          <div className="p-2">
            <label className={style.label}>Language</label>
            <br />
            <input
              onChange={handlerChange}
              type="text"
              name="language"
              value={data.language}
              className={style.input}
            />
          </div>
          <div className="p-2">
            <label className={style.label}>Level</label>
            <br />
            <select
              onChange={handlerChange}
              name="level"
              id="level"
              value={data.level}
              className={style.input}
            >
              <option value="">- Select a value -</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="container p-2 text-center">
            <button className={style.button} type="submit">
              {
                isAdd ? 'Add' : 'Update' 
              }
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InputList;
