"use client";

import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import style from "../style/Modal.module.css"
function Modal({ setOpen, open, onSave }) {
  const [rank, setRank] = useState("");
  const [percentile, setPercentile] = useState("");
  const [score, setScore] = useState("");

  const handleSave = () => {
    onSave({ rank, percentile, score });
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
      <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded bg-white p-6 shadow-lg">
          <Dialog.Title className="text-lg font-semibold">Update Scores</Dialog.Title>
          <div className="mt-4 flex">
            <label className="block w-6/12" >Update your Rank</label>
            <input
              type="text"
              className="w-6/12 border rounded p-2 mt-1"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
            />
          </div>
          <div className="mt-4 flex">
            <label className="block w-6/12">Update your Percentile</label>
            <input
              type="text"
              className="w-6/12 border rounded p-2 mt-1"
              value={percentile}
              onChange={(e) => setPercentile(e.target.value)}
            />
          </div>
          <div className="mt-4 flex">
            <label className="block w-6/12">Update your current Score (out of 15)</label>
            <input
              type="text"
              className="w-6/12 border rounded p-2 mt-1"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleSave}
              className="bg-blue-600 text-white py-2 px-4 rounded mr-2"
            >
              Save
            </button>
            <button
              onClick={() => setOpen(false)}
              className="bg-gray-300 py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default Modal;
