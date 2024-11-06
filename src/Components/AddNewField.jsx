import React, { useState } from "react";
import ReactDOM from "react-dom";

const AddFieldModal = ({ isOpen, onClose, onAddField }) => {
  const [fieldName, setFieldName] = useState("");
  const [fieldType, setFieldType] = useState("dropdown");
  const [selectionType, setSelectionType] = useState("multiple");
  const [dropdownOptions, setDropdownOptions] = useState([
    { value: "", id: Date.now() },
  ]);

  const handleAddOption = () => {
    setDropdownOptions([...dropdownOptions, { value: "", id: Date.now() }]);
  };

  const handleOptionChange = (id, value) => {
    setDropdownOptions(
      dropdownOptions.map((option) =>
        option.id === id ? { ...option, value } : option
      )
    );
  };

  const handleRemoveOption = (id) => {
    setDropdownOptions(dropdownOptions.filter((option) => option.id !== id));
  };

  const handleReset = () => {
    setFieldName("");
    setFieldType("dropdown");
    setSelectionType("multiple");
    setDropdownOptions([{ value: "", id: Date.now() }]);
  };

  const handleAddField = () => {
    if (fieldName.trim() === "") return;
    onAddField({
      fieldName,
      fieldType,
      selectionType,
      dropdownOptions: dropdownOptions.filter(
        (option) => option.value.trim() !== ""
      ),
    });
    handleReset();
    onClose();
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Add New Field</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500"
          >
            &times;
          </button>
        </div>

        <div className="mb-4">
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="fieldType"
                value="dropdown"
                checked={fieldType === "dropdown"}
                onChange={(e) => setFieldType(e.target.value)}
                className="form-radio"
              />
              <span className="text-sm">Dropdown</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="fieldType"
                value="text"
                checked={fieldType === "text"}
                onChange={(e) => setFieldType(e.target.value)}
                className="form-radio"
              />
              <span className="text-sm">Text field</span>
            </label>
          </div>
        </div>

        {fieldType === "dropdown" && (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Selection Type
              </label>
              <select
                value={selectionType}
                onChange={(e) => setSelectionType(e.target.value)}
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value="multiple">Multiple</option>
                <option value="single">Single</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Field Name
              </label>
              <input
                type="text"
                value={fieldName}
                onChange={(e) => setFieldName(e.target.value)}
                className="w-full border rounded-lg px-3 py-2"
                placeholder="Enter field name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Options</label>
              {dropdownOptions.map((option, index) => (
                <div
                  key={option.id}
                  className="flex items-center mb-2 space-x-2"
                >
                  <input
                    type="text"
                    value={option.value}
                    onChange={(e) =>
                      handleOptionChange(option.id, e.target.value)
                    }
                    className="w-full border rounded-lg px-3 py-2"
                    placeholder={`Option ${index + 1}`}
                  />
                  <button
                    type="button"
                    className="text-red-500 font-bold"
                    onClick={() => handleRemoveOption(option.id)}
                  >
                    &minus;
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="text-blue font-medium"
                onClick={handleAddOption}
              >
                + Add Option
              </button>
            </div>
          </>
        )}

        <div className="md:flex flex-col-reverse justify-end space-x-2 md:px-6">
          <button
            type="button"
            className="px-4 py-2 border rounded-lg text-gray hover:bg-gray"
            onClick={handleReset}
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-blue text-white rounded-lg hover:bg-blue"
            onClick={handleAddField}
          >
            Add
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default AddFieldModal;
