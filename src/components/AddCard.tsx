import React, { useState } from 'react';

interface AddCardProps {
  onAddCard: (title: string) => void;
}

const AddCard: React.FC<AddCardProps> = ({ onAddCard }) => {
  const [title, setTitle] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleAddCard = () => {
    if (title.trim() !== '') {
      onAddCard(title);
      setTitle('');
    }
  };

  return (
    <div className="my-4">
      <input
        type="text"
        placeholder="Enter card title"
        value={title}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={handleAddCard}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Add Card
      </button>
    </div>
  );
};

export default AddCard;
