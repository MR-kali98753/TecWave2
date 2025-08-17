"use client"

import CreatePostForm from "@/components/createPostForm";

const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
  };
  

const post = () => {
    const handleCreatePost = async (title: string, content: string, authorId?: string) => {
        const slug = generateSlug(title);
        const postData = {
            title,
            slug,
            content,
            authorId,
        };

        try {
            const response = await fetch('/api/create-post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to create post');
            }

            const data = await response.json();
            console.log('Post created successfully:', data);
            
        } catch (error: any) {
            console.error('Error creating post:', error.message);
            
        }
    };

    return (
        <div>
            <CreatePostForm onCreatePost={handleCreatePost} />
        </div>
    );
};

export default post;