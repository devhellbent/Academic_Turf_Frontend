import React from "react";

function EditExperience({ experience, onSave, onCancel }) {
  const [jobTitle, setJobTitle] = React.useState(experience.jobtitle);
  const [companyname, setCompany] = React.useState(experience.company);
  const [startDate, setStartDate] = React.useState(experience.startDate);
  const [endDate, setEndDate] = React.useState(experience.endDate);
  const [description, setDescription] = React.useState(experience.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      id: experience.id,
      jobtitle: jobTitle,
      companyname: companyname,
      startDate,
      endDate,
      description,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 lg:w-[70%]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Edit Experience</h2>
          <div
            onClick={onCancel}
            className="border p-1 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="overflow-x-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 px-1">
            <div className="mb-4">
              <label className="block text-sm font-medium">Job Title</label>
              <input
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Company</label>
              <input
                type="text"
                value={companyname}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 px-1 mb-4">
            <div className="mb-4">
              <label className="block text-sm font-medium">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Description</label>
              <textarea
                value={description}
                rows={3}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 border bg-gray-200 rounded-md"
              />
            </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-200 hover:bg-gray-300 font-semibold text-gray-600 px-4 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-black hover:bg-gray-800 font-semibold text-white px-4 py-2 rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditExperience;