import React, { useState } from 'react';
import ItemForm from './ItemForm';
import Filter from './Filter';
import Item from './Item';

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchText, setSearchText] = useState('');
  const [itemList, setItemList] = useState(items);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(text) {
    setSearchText(text);
  }

  function handleItemFormSubmit(newItem) {
    setItemList((prevItemList) => [...prevItemList, newItem]);
  }

  const filteredItems = itemList.filter((item) => {
    const categoryMatch =
      selectedCategory === 'All' || item.category === selectedCategory;
    const nameMatch = item.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    return categoryMatch && nameMatch;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
      />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

ShoppingList.js;

// import React, { useState } from 'react';
// import ItemForm from './ItemForm';
// import Filter from './Filter';
// import Item from './Item';

// function ShoppingList({ items }) {
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   function handleCategoryChange(event) {
//     setSelectedCategory(event.target.value);
//   }

//   const itemsToDisplay = items.filter((item) => {
//     if (selectedCategory === 'All') return true;

//     return item.category === selectedCategory;
//   });

//   return (
//     <div className="ShoppingList">
//       <ItemForm />
//       <Filter onCategoryChange={handleCategoryChange} />
//       <ul className="Items">
//         {itemsToDisplay.map((item) => (
//           <Item key={item.id} name={item.name} category={item.category} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ShoppingList;
