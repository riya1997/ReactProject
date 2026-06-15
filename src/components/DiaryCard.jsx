const DiaryCard = ({ entry, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="shadow-xl hover:shadow-2xl cursor-pointer rounded-2xl"
    >
      <img
        src={entry.imgUrl}
        alt={entry.title}
        className="w-full h-65 object-cover rounded-t-2xl"
      />

      <div className="p-4">
        <h2 className="font-semibold py-3">{entry.title}</h2>
        <p>{entry.date}</p>
      </div>
    </div>
  );
};

export default DiaryCard;
