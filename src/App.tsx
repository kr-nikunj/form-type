import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { Droppable } from './Droppable';
import AddCard from './components/AddCard';
import { Draggable } from './Draggable';
import Card from './components/Card';

function App() {
  const containers = ['A', 'B', 'C'];
  const [parent, setParent] = useState(null);
  const [cards, setCards] = useState<string[]>([]);

  const draggableMarkup = (
    <div>
      {cards.map((cardTitle, index) => (
        <Draggable key={index} id={`card-${index}`}>
          <Card title={cardTitle} />
        </Draggable>
      ))}
    </div>
  );

  function handleAddCard(title: string) {
    // Handle adding a new card with the provided title
    console.log('Adding card with title:', title);
    setCards([...cards, title]);
  }

  function handleDragEnd(event: any) {
    const { over } = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }

  return (
    <>
      <AddCard onAddCard={handleAddCard} />
      <DndContext onDragEnd={handleDragEnd}>
        {parent === null ? draggableMarkup : null}

        {containers.map((id) => (
          <div key={id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Droppable id={id}>
              {parent === id ? draggableMarkup : 'Drop here'}
            </Droppable>
          </div>
        ))}
      </DndContext>
    </>
  );
}

export default App;
