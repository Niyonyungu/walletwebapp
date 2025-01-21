import React, { useState } from 'react';

const Settings = () => {

    const [categories, setCategories] = useState([
    { id: 1, name: 'Food', parent: null },
    { id: 2, name: 'Transport', parent: null },
    { id: 3, name: 'Entertainment', parent: null },
    { id: 4, name: 'Groceries', parent: 'Food' },
    { id: 5, name: 'Restaurants', parent: 'Food' },
  ]);

  const [newCategory, setNewCategory] = useState({ name: '', parent: '' });
  const [budget, setBudget] = useState('');

  const handleCategorySubmit = (e) => {
    e.preventDefault();
    setCategories([...categories, { id: categories.length + 1, ...newCategory }]);
    setNewCategory({ name: '', parent: '' });
  };

  const handleBudgetSubmit = (e) => {
    e.preventDefault();
    console.log('New budget set:', budget);
  };

  return (
   <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6">Settings</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-lg border shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Manage Categories</h2>
          </div>
          <div className="p-6">
            <form onSubmit={handleCategorySubmit} className="space-y-4">
              <div>
                <label 
                  htmlFor="categoryName" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Category Name
                </label>
                <input
                  id="categoryName"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newCategory.name}
                  onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label 
                  htmlFor="parentCategory" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Parent Category (Optional)
                </label>
                <select
                  id="parentCategory"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newCategory.parent}
                  onChange={(e) => setNewCategory({ ...newCategory, parent: e.target.value })}
                >
                  <option value="">None</option>
                  {categories.filter(c => !c.parent).map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="bg-[#0088ff] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Add Category
              </button>
            </form>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Current Categories</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li 
                    key={category.id}
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <span className="w-2 h-2 bg-[#0088ff] rounded-full"></span>
                    <span>
                      {category.name} 
                      {category.parent && (
                        <span className="text-gray-500 text-sm ml-2">
                          (Child of {category.parent})
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      
        <div className="bg-white rounded-lg border shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Set Budget</h2>
          </div>
          <div className="p-6">
            <form onSubmit={handleBudgetSubmit} className="space-y-4">
              <div>
                <label 
                  htmlFor="budget" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Monthly Budget
                </label>
                <input
                  id="budget"
                  type="number"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  required
                  placeholder="Enter amount"
                />
              </div>
              <button
                type="submit"
                className="bg-[#0088ff] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Set Budget
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
