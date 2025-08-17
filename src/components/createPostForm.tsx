import React, { useState } from 'react';

interface CreatePostFormProps {
  onCreatePost: (
    title: string, 
    content: string, 
    authorId?: string
  ) => void;
}

const CreatePostForm: React.FC<CreatePostFormProps> = ({ onCreatePost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [authorId, setAuthorId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onCreatePost(title, content, authorId || undefined);
    setTitle('');
    setContent('');
    setAuthorId(''); 
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create New Post</h2>

      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Create Post
      </button>
    </form>
  );
};

export default CreatePostForm;