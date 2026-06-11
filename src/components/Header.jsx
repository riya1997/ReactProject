const Header = () => {
  return (
    <div className="bg-gray-300 p-8 flex flex-row justify-between">
      <div>
        <h1 className="text-3xl font-bold">My Personal Diary</h1>
        <p className="italic py-2 text-lg">
          Capturing moments, one day at a time
        </p>
      </div>
      <div>
        <button className="bg-gray-500 rounded-md mx-10 mt-3 p-3 font-bold">
          Add New Entry
        </button>
      </div>
    </div>
  );
};

export default Header;
