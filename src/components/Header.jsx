import { useState } from "react";
import EntryForm from "./EntryForm";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleCancel = () => {
    document.getElementById("my_modal_1").close();
  };
  return (
    <div className="bg-gray-300 p-8 flex flex-row justify-between">
      <div>
        <h1 className="text-3xl font-bold">My Personal Diary</h1>
        <p className="italic py-2 text-lg">
          Capturing moments, one day at a time
        </p>
      </div>
      <div>
        <button
          className="bg-gray-500 rounded-md mx-10 mt-3 p-3 font-bold"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Add New Entry
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box max-w-3xl">
            <button
              className="float-right text-xl font-bold"
              onClick={handleCancel}
            >
              ✕
            </button>
            <h3 className="font-bold text-2xl px-25">Create New Entry</h3>

            <EntryForm handleCancel={handleCancel} />
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Header;
