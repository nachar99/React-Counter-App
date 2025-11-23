import { useState } from "react";

import "./App.css";
import AddNewCounter from "./components/AddNewCounter";
import Header from "./components/Header";
import NoCountersYet from "./components/NoCountersYet";
import TotalCountsExist from "./components/TotalCountsExist";
import CounterCard from "./components/CounterCard";

function App() {
  const [counters, setCounters] = useState([]);
  const [hasCounters, setHasCounters] = useState(false);
  const totalCount = counters.reduce((sum, c) => sum + c.count, 0);

  function handleCreateCounter(newCounter) {
    setCounters((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: newCounter.name,
        increment: newCounter.incrementAmount,
        count: 0,
      },
    ]);
    setHasCounters(true);
  }

  function handleDelete(id) {
    setCounters((prev) => prev.filter((c) => c.id !== id));
  }
  function handleIncrement(id) {
    setCounters((prev) =>
      prev.map((c) => (c.id == id ? { ...c, count: c.count + c.increment } : c))
    );
  }
  function handleDecrement(id) {
    setCounters((prev) =>
      prev.map((c) => (c.id == id ? { ...c, count: c.count - c.increment } : c))
    );
  }
  function handleReset(id) {
    setCounters((prev) =>
      prev.map((c) => (c.id == id ? { ...c, count: 0 } : c))
    );
  }

  function handleDeleteAll() {
    setCounters([]);
    setHasCounters(false);
  }

  return (
    <>
      <Header />
      <div className="flex flex-col gap-4 items-center py-8 ">
        {/* 🔗 App → AddNewCounter */}
        <AddNewCounter onCreate={handleCreateCounter} />

        {hasCounters && (
          <TotalCountsExist count={totalCount} onDeleteAll={handleDeleteAll} />
        )}
        {!hasCounters && <NoCountersYet />}
      </div>
      <section className="mt-4  w-9/12 justify-self-center ">
        <div className=" flex flex-row flex-wrap gap-1 justify-start">
          {counters.map((counter) => (
            <CounterCard
              key={counter.id}
              counter={counter}
              onDelete={() => {
                handleDelete(counter.id);
              }}
              onIncrement={() => {
                handleIncrement(counter.id);
              }}
              onDecrement={() => {
                handleDecrement(counter.id);
              }}
              onReset={() => {
                handleReset(counter.id);
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
