export default function CounterCard({
  counter,
  onDelete,
  onIncrement,
  onDecrement,
  onReset,
}) {
  return (
    <div className="bg-white rounded-lg shadow-md w-98/200 py-4 flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-textdark">{counter.name}</h3>

      <p className="text-4xl  text-primary font-bold">
        {counter.count}{" "}
        <span className="text-sm text-textgray font-normal">times</span>
      </p>

      <p className="text-sm  rounded-lg bg-blue-100 w-3/10 self-center text-primary">
        Increment: {counter.increment}
      </p>

      <div className="flex flex-row gap-2 flex-wrap p-2">
        <button
          className="bg-[#D6700C] text-white py-2 rounded-md text-lg font-semibold w-98/200"
          onClick={() => {
            onDecrement();
          }}
        >
          -{counter.increment}
        </button>
        <button
          className="bg-[#15895D] text-white py-2 rounded-md text-lg font-semibold w-98/200"
          onClick={() => {
            onIncrement();
          }}
        >
          +{counter.increment}
        </button>
        <button
          className=" bg-[#5F6B7A] text-white py-2 rounded-md text-lg font-semibold w-98/200"
          onClick={() => {
            onReset;
          }}
        >
          Reset
        </button>
        <button
          className=" bg-[#D42121] text-white py-2 rounded-md text-lg font-semibold w-98/200"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
