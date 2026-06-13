import { useEntry } from "../context/EntryContext";
import DiaryCard from "./DiaryCard";
import { useState } from "react";
import DiaryModal from "./DiaryModal";

function DiaryList() {
  const { entries } = useEntry();
  const [selectedDiary, setSelectedDiary] = useState(null);
  const sortedEntries = [...entries].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  // console.log(entries);
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      {entries && (
        <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {sortedEntries.map((diary) => (
            <DiaryCard
              key={diary.date}
              entry={diary}
              onClick={() => setSelectedDiary(diary)}
            />
          ))}
        </section>
      )}

      {selectedDiary && (
        <DiaryModal
          diary={selectedDiary}
          onClose={() => setSelectedDiary(null)}
        />
      )}
    </main>
  );
}

export default DiaryList;
