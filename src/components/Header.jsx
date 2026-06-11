// import { Modal } from "flowbite-react";
import { useState } from "react";
import EntryForm from "./EntryForm";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
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
            <h3 className="font-bold text-2xl">Create New Entry</h3>
            <EntryForm />
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn bg-gray-400 hover:bg-gray-600">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
        {/* <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <ModalHeader>Create New Entry</ModalHeader>
            <ModalBody>
              <EntryForm />
            </ModalBody>
            <ModalFooter>
              <Button color="alternative" onClick={() => setOpenModal(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpenModal(false)}>Save Entry</Button>
            </ModalFooter>
          </Modal> */}
      </div>
    </div>
  );
};

export default Header;
