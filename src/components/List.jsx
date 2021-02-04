import React from "react";

const List = (props) => {
  let list = props.list;

  const deleteRecord = (index) => {
    props.deleteRecord(index);
  };

  return (
    <div className="container pt-10">
      <table className="table-auto border-collapse border border-black-600 w-full">
        <thead>
          <tr className="bg-blue-400 border-none text-white">
            <th className=" p-3" >Delete</th>
            <th className=" p-3" >Name</th>
            <th className=" p-3" >Language</th>
            <th className=" p-3" >Level</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, idx) => (
            <tr key={idx}>
              <td id={idx} onClick={ () => { deleteRecord(idx) } }  className="border-b p-4 text-center text-red-600 font-bold" >X</td>
              <td className="border-b p-4 text-center" >{item.name}</td>
              <td className="border-b p-4 text-center" >{item.language}</td>
              <td className="border-b p-4 text-center" >{item.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default List;
