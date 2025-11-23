import { useState } from "react";

export default function CounterForm({ onCreate, onCancel }) {
  const [name, setName] = useState("");
  const [increment, setIncrement] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    const incrementAmount = Number(increment) || 1;

    onCreate({
      name: name.trim(),
      incrementAmount,
    });

    setName("");
    setIncrement(1);
  };

  return (
    <>
      <div className="mx-auto mt-6 max-w-md ">
        <h2 className="mb-4 text-center text-xl font-semibold text-textdark">
          Create New Counter
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-1 max-sm:place-items-center">
            <label className="text-sm font-medium text-textdark">
              Counter Name:
            </label>
            <input
              type="text"
              placeholder="Enter counter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-md border border-border-gray bg-white px-3 py-2 max-sm:w-10/12 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="flex flex-col gap-1 max-sm:place-items-center">
            <label className="text-sm font-medium text-textdark">
              Increment Amount:
            </label>
            <input
              type="number"
              min="1"
              value={increment}
              onChange={(e) => setIncrement(e.target.value)}
              className="rounded-md border border-border-gray bg-white px-3 max-sm:w-10/12 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="mt-4 flex justify-end gap-3 max-sm:justify-around">
            <button
              type="submit"
              className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 max-sm:w-5/12"
            >
              Create Counter
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="rounded-md bg-gray px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700 max-sm:w-5/12"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
