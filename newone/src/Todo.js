import React, { useState } from 'react';

function Todo() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('In Progress'); // Default status
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (editIndex !== null) {
      // If editing, update the item
      const updatedItems = [...items];
      updatedItems[editIndex] = { text: newItem, date: new Date().toLocaleString(), status: selectedStatus };
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      // If not editing, add a new item
      setItems([...items, { text: newItem, date: new Date().toLocaleString(), status: selectedStatus }]);
    }
    // Clear the input field and reset status to default
    setNewItem('');
    setSelectedStatus('In Progress');
  };

  const handleDelete = (index) => {
    // Delete the item at the specified index
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleEdit = (index) => {
    // Set the input field with the item text and status
    setNewItem(items[index].text);
    setSelectedStatus(items[index].status);
    // Set the index to be edited
    setEditIndex(index);
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg white rounded p-3">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter new item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="status">Status:</label>
          <select
            className="form-control"
            id="status"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
            {/* Add more status options as needed */}
          </select>
        </div>
        <button className="btn btn-success" onClick={handleAdd}>
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.text}</td>
                <td>{item.date}</td>
                <td>{item.status}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDelete(index)}>
                    Delete
                  </button>
                  <button className="btn btn-warning mx-2" onClick={() => handleEdit(index)}>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Todo;

