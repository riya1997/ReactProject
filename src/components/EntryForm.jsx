import { useState } from "react";
import { useEntry } from "../context/EntryContext";

const initialFormData = {
  date: "",
  title: "",
  imgUrl: "",
  content: "",
};

const EntryForm = ({ handleCancel }) => {
  const { addEntry } = useEntry();
  const [formData, setFormData] = useState(initialFormData);
  const [submittedData, setSubmittedData] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (!formData.title) throw new Error("Title should not be blank");
      if (!formData.date) throw new Error("Date should not be blank");
      if (!formData.imgUrl) throw new Error("Image Url should not be blank");
      if (!formData.content) throw new Error("Content should not be blank");

      const entry = {
        title: formData.title,
        date: formData.date,
        imgUrl: formData.imgUrl,
        content: formData.content,
      };
      console.log("entry being saved:", entry);
      addEntry(entry);
      setSubmittedData(formData);
      setFormData(initialFormData);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      setTimeout(() => document.getElementById("my_modal_1").close(), 4000);
    } catch (error) {
      alert(error);
    }
    // setSubmittedData(formData);

    //setDiary((prev) => [...prev, n]);
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "1rem auto",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {showSuccess && (
        <p style={{ color: "green" }}>Dairy entry Successful!!</p>
      )}
      <form onSubmit={handleSubmit}>
        <label className="block text-left font-semibold ">
          Date :
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="input input-bordered w-full mx-1 focus:outline-none"
          />
        </label>
        <br />
        <label className="block text-left font-semibold ">
          Title :
          <input
            type="text"
            name="title"
            placeholder="Give your entry a title..."
            value={formData.title}
            onChange={handleChange}
            className="input input-bordered w-full mx-1 focus:outline-none"
          />
        </label>
        <br />
        <label className="block text-left font-semibold">
          Image URL :
          <input
            type="text"
            name="imgUrl"
            value={formData.imgUrl}
            onChange={handleChange}
            className="input input-bordered w-full mx-1 focus:outline-none"
          />
        </label>
        <br />
        <label className="block text-left font-semibold">
          Content :
          <textarea
            type="text"
            name="content"
            placeholder="Write your thoughts here..."
            value={formData.content}
            onChange={handleChange}
            className="textarea textarea-bordered w-full mx-1 focus:outline-none"
          />
        </label>
        <br />
        <button
          type="submit"
          className="w-[100px] py-2 bg-gray-400 rounded hover:bg-gray-600"
        >
          Save Entry
        </button>
      </form>
      <br />
      <button
        type="submit"
        className="w-[100px] py-2 bg-gray-400 rounded hover:bg-gray-600"
        onClick={handleCancel}
      >
        Cancel
      </button>
    </div>
  );
};

export default EntryForm;
