import React from "react";
import moment from "moment";

const List = (props) => {
  let list = props.list;

  const deleteRecord = (index) => {
    props.deleteRecord(index);
  };

  const getTaskRecord = (record) => {
    props.getTaskRecord(record);
  }

  return (
    <div className="container pt-10">
      <table className="table-auto border-collapse border border-black-600 w-full">
        <thead>
          <tr className="bg-blue-400 border-none text-white">
            <th className=" p-3">Delete</th>
            <th className=" p-3">Task</th>
            <th className=" p-3">Create Date</th>
            <th className=" p-3">Check</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, idx) => (
            <tr key={idx}>
              <td className="w-px border-b px-4 py-5 text-center font-bold">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-red-600 mr-1 cursor-pointer"
                    onClick={() => {
                      deleteRecord(item.id);
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-green-600 cursor-pointer"
                    onClick={() => {
                      getTaskRecord(item);
                    }}
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </div>
              </td>
              <td className="border-b p-4 text-center">{item.name}</td>
              <td className="border-b p-4 text-center">
                {!!item.create_date
                  ? moment(item.create_date).format("DD/MM/YYYY")
                  : ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default List;
