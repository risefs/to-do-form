import { React } from "react";

const Modal = ({ buttons, isOpen, openModal, children: Content }) => {
  const style = {
    input: "p-1  bg-blue-100 rounded-md w-full",
    buttonPrimary:
      "rounded-sm bg-blue-500 p-2 m-2 text-white w-full border-none hover:bg-blue-700 rounded-md",
    buttonSecundary:
      "rounded-sm bg-red-500 p-2 m-2 text-white w-full border-none hover:bg-red-700 rounded-md",
    buttonCancel:
      "rounded-sm bg-gray-500 p-2 m-2 text-white w-full border-none hover:bg-gray-700 rounded-md",
    label: "font-bold text-md p-4",
  };

  return (
    <>
      <div className="z-10 fixed w-full h-full pt-60">
        <div className="box-content self-center w-2/4 pl-96">
          <div className="shadow-2xl box-content self-center w-auto bg-white p-2">
            {Content ? Content : null}
            <div className="shadow-2xl box-content self-center w-auto bg-white p-2">
              <div className="grid grid-cols-6">
                <div className="w-full col-start-1 col-end-2">
                  <button
                    className={style.buttonCancel}
                    onClick={() => {
                      openModal(isOpen);
                    }}
                  >
                    Cancel
                  </button>
                </div>
                {buttons.map((key, idx) => (
                  <div key={idx} className="col-start-6">
                    <button
                      onClick={ key.action}
                      className={
                        key.type === "primary" ? style.buttonPrimary : null
                      }
                    >
                      {key.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
