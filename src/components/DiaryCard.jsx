const DiaryCard = ({ entry, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="shadow-xl hover:shadow-2xl cursor-pointer rounded-md"
    >
      <img
        src={entry.imgUrl}
        alt={entry.title}
        className="w-full h-64 object-cover"
      />

      <div className="p-4">
        <h2>{entry.title}</h2>
        <p>{entry.date}</p>
      </div>
    </div>
  );
};

export default DiaryCard;
