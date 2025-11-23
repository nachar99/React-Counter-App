export default function TotalCountsExist({ count, onDeleteAll }) {
  return (
    <>
      <div className="bg-white p-6 flex flex-row justify-between items-center rounded-sm shadow-md w-9/12 max-sm:gap-1">
        <span>
          Total Count: <a className="color-primary text-2xl">{count}</a>
        </span>
        <button
          type="submit"
          className="rounded-md bg-red px-4 py-2 text-sm font-semibold text-white hover:bg-red-900  max-sm:p-2 max-sm:w-6/12"
          onClick={onDeleteAll}
        >
          Clear All Counters
        </button>
      </div>
    </>
  );
}
