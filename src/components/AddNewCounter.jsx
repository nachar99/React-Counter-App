import { useState } from "react";
import { IoAddSharp } from "react-icons/io5";
import NewCounterForm from "./NewCounterForm";

export default function AddNewCounter({ onCreate }) {
  const [button, setButton] = useState(true);
  const [form, setForm] = useState(false);

  return (
    <>
      <div className="bg-white py-6 flex flex-col place-items-center rounded-sm shadow-md w-9/12 gap-2">
        {button && (
          <button
            className="bg-primary p-2 rounded-sm text-white flex items-center gap-2"
            onClick={() => {
              setForm(true);
              setButton(false);
            }}
          >
            <IoAddSharp className="text-2xl" />
            <span>Add New Counter</span>
          </button>
        )}

        {form && (
          <div className="bg-background py-2 flex flex-col place-items-center rounded-sm  w-6/12">
            <NewCounterForm
              onCancel={() => {
                setButton(true);
                setForm(false);
              }}
              onCreate={onCreate}
            />
          </div>
        )}
      </div>
    </>
  );
}
