const DiaryModal = ({ diary, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 max-w-xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="float-right text-xl font-bold" onClick={onClose}>
          ✕
        </button>

        <img
          src={diary.imgUrl}
          alt={diary.title}
          className="w-full h-72 object-cover rounded"
        />

        <h2 className="text-2xl font-bold mt-4">{diary.title}</h2>

        <p className="text-gray-500">{diary.date}</p>

        <p className="mt-4">{diary.content}</p>
      </div>
    </div>
  );
};

export default DiaryModal;
