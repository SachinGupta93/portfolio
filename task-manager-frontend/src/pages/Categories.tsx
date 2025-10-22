// ============================================================================
// CATEGORIES PAGE COMPONENT
// ============================================================================
// Categories management page with CRUD operations
// ============================================================================

import React, { useEffect, useState, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchCategories, createCategory, updateCategory, deleteCategory } from '../store/slices/categorySlice';
import { fetchTasks } from '../store/slices/taskSlice';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { PlusIcon, FolderIcon, EditIcon, TrashIcon, XIcon, SearchIcon } from 'lucide-react';
import { Category } from '../types';
import { RootState } from '../store/index';
import { CategoryCreateRequest, CategoryUpdateRequest } from '../services/simpleApi';

const Categories: React.FC = () => {
  const dispatch = useAppDispatch();
  const { categories, isLoading, error } = useAppSelector((state: RootState) => state.categories as { 
    categories: Category[], 
    isLoading: boolean, 
    error: string | null 
  });
  const { tasks } = useAppSelector((state: RootState) => state.tasks);

  // Modal and form state
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);  const [formData, setFormData] = useState<CategoryCreateRequest>({
    name: '',
    description: '',
    color: '#3B82F6'
  });  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [submitLoading, setSubmitLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string>('');
  
  // Search and filter state
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'taskCount' | 'recent'>('name');

  // Color options for categories
  const colorOptions = [
    '#3B82F6', // Blue
    '#10B981', // Green  
    '#F59E0B', // Yellow
    '#EF4444', // Red
    '#8B5CF6', // Purple
    '#EC4899', // Pink
    '#14B8A6', // Teal
    '#F97316', // Orange
    '#6366F1', // Indigo
    '#84CC16', // Lime
  ];

  useEffect(() => {
    dispatch(fetchCategories());
    // Fetch tasks to get task counts per category
    dispatch(fetchTasks());
  }, [dispatch]);
  // Form handling functions
  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      color: '#3B82F6'
    });
    setFormErrors({});
    setSuccessMessage('');
  };

  const openCreateModal = () => {
    resetForm();
    setIsCreateModalOpen(true);
  };

  const openEditModal = (category: Category) => {
    if (!category || !category._id) return;
    
    setEditingCategory(category);
    setFormData({
      name: category.name || '',
      description: category.description || '',
      color: category.color || '#3B82F6'
    });
    setFormErrors({});
    setIsEditModalOpen(true);
  };

  const closeModals = () => {
    setIsCreateModalOpen(false);
    setIsEditModalOpen(false);
    setEditingCategory(null);
    resetForm();
  };

  const validateForm = (): boolean => {
    const errors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Category name is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setSubmitLoading(true);
    setSuccessMessage('');

    try {
      if (isEditModalOpen && editingCategory) {
        const updateData: CategoryUpdateRequest = {
          name: formData.name,
          description: formData.description,
          color: formData.color
        };
        await dispatch(updateCategory({ id: editingCategory._id, data: updateData })).unwrap();
        setSuccessMessage('Category updated successfully!');
      } else {
        await dispatch(createCategory(formData)).unwrap();
        setSuccessMessage('Category created successfully!');
      }
      
      // Close modal after a brief delay to show success message
      setTimeout(() => {
        closeModals();
      }, 1000);
    } catch (error: any) {
      console.error('Failed to save category:', error);
      setFormErrors({ submit: error.message || 'Failed to save category' });
    } finally {
      setSubmitLoading(false);
    }
  };
  const handleDelete = async (categoryId: string) => {
    if (!categoryId) return;
    
    // Check if category has tasks
    const categoryTasks = tasks.filter(task => task.category === categoryId);
    if (categoryTasks.length > 0) {
      if (!window.confirm(`This category has ${categoryTasks.length} task(s). Deleting it will remove the category from those tasks. Are you sure?`)) {
        return;
      }
    } else {
      if (!window.confirm('Are you sure you want to delete this category?')) {
        return;
      }
    }

    try {
      await dispatch(deleteCategory(categoryId)).unwrap();
      setSuccessMessage('Category deleted successfully!');
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error: any) {
      console.error('Failed to delete category:', error);
      setFormErrors({ submit: error.message || 'Failed to delete category' });
    }
  };

  // Get task count for a category
  const getTaskCount = (categoryId: string): number => {
    return tasks.filter(task => task.category === categoryId).length;
  };
  // Get completion rate for a category
  const getCompletionRate = (categoryId: string): number => {
    const categoryTasks = tasks.filter(task => task.category === categoryId);
    if (categoryTasks.length === 0) return 0;
    const completedTasks = categoryTasks.filter(task => task.status === 'completed').length;
    return Math.round((completedTasks / categoryTasks.length) * 100);
  };

  // Filter and sort categories
  const filteredAndSortedCategories = useMemo(() => {
    let filtered = categories.filter(category =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (category.description && category.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    // Sort categories
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'taskCount':
          return getTaskCount(b._id) - getTaskCount(a._id);
        case 'recent':
          return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [categories, searchTerm, sortBy, tasks]);

  if (isLoading) {
    return <LoadingSpinner message="Loading categories..." />;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Categories</h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Organize your tasks with categories
          </p>
        </div>        <div className="mt-4 sm:mt-0">
          <button 
            onClick={openCreateModal}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <PlusIcon className="h-4 w-4 mr-2" />
            New Category
          </button>
        </div>
      </div>      {/* Search and Filter Controls */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>

          {/* Sort */}
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Sort by:
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'name' | 'taskCount' | 'recent')}
              className="block px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            >
              <option value="name">Name</option>
              <option value="taskCount">Task Count</option>
              <option value="recent">Recently Updated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md p-4">
          <p className="text-sm text-green-600 dark:text-green-400">{successMessage}</p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-4">
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        </div>
      )}

      {/* Form Error Message */}
      {formErrors.submit && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-4">
          <p className="text-sm text-red-600 dark:text-red-400">{formErrors.submit}</p>
        </div>
      )}      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">        {filteredAndSortedCategories.length === 0 ? (
          <div className="col-span-full text-center py-12">
            {searchTerm ? (
              <>
                <SearchIcon className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                  No categories found
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  No categories match your search criteria.
                </p>
                <div className="mt-6">
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    Clear Search
                  </button>
                </div>
              </>
            ) : (
              <>
                <FolderIcon className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                  No categories
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Get started by creating a new category.
                </p>
                <div className="mt-6">
                  <button 
                    onClick={openCreateModal}
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <PlusIcon className="h-4 w-4 mr-2" />
                    New Category
                  </button>
                </div>
              </>
            )}
          </div>
        ) : (
          filteredAndSortedCategories.map((category: Category) => (
            <div
              key={category._id || (category.userId + category.name)}
              className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div
                      className="h-10 w-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: category.color }}
                    >
                      <FolderIcon className="h-6 w-6 text-white" />
                    </div>                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {category.name}
                      </h3>
                      {category.description && (
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                          {category.description}
                        </p>
                      )}
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {getTaskCount(category._id)} tasks
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => openEditModal(category)}
                      className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                      title="Edit category"
                    >
                      <EditIcon className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => handleDelete(category._id)}
                      className="p-1 text-gray-400 hover:text-red-600 dark:hover:text-red-400"
                      title="Delete category"
                    >
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full flex-1 mr-4">
                    <div
                      className="h-2 rounded-full"
                      style={{ 
                        backgroundColor: category.color,
                        width: `${getCompletionRate(category._id)}%`
                      }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {getCompletionRate(category._id)}% complete
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>      {/* Category Stats */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Category Overview
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {categories.length}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Total Categories
            </p>
          </div>          
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {filteredAndSortedCategories.length}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {searchTerm ? 'Filtered' : 'Visible'} Categories
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {tasks.length}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Total Tasks
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {categories.length > 0 ? Math.round(tasks.length / categories.length) : 0}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Avg Tasks per Category
            </p>
          </div>
        </div>
      </div>

      {/* Category Creation/Edit Modal */}
      {(isCreateModalOpen || isEditModalOpen) && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white dark:bg-gray-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {isEditModalOpen ? 'Edit Category' : 'Create New Category'}
              </h3>
              <button
                onClick={closeModals}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <XIcon className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Success Message in Modal */}
              {successMessage && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md p-3">
                  <p className="text-sm text-green-600 dark:text-green-400">{successMessage}</p>
                </div>
              )}

              {/* Error Message in Modal */}
              {formErrors.submit && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-3">
                  <p className="text-sm text-red-600 dark:text-red-400">{formErrors.submit}</p>
                </div>
              )}
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 ${
                    formErrors.name ? 'border-red-300' : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder="Enter category name"
                />
                {formErrors.name && (
                  <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
                )}
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Description
                </label>
                <textarea
                  id="description"
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="Enter category description"
                />
              </div>

              {/* Color */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Color
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {colorOptions.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setFormData({ ...formData, color })}
                      className={`w-8 h-8 rounded-full border-2 ${
                        formData.color === color 
                          ? 'border-gray-900 dark:border-white' 
                          : 'border-gray-300 dark:border-gray-600'
                      }`}
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={closeModals}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
                >
                  Cancel
                </button>                <button
                  type="submit"
                  disabled={submitLoading}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitLoading ? 'Saving...' : (isEditModalOpen ? 'Update Category' : 'Create Category')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
