import client from "@/lib/sanity.client";

interface CreatPostInput {
  title: string;
  slug: string;
  content: string;
  authorId: string;
}

export async function createPostSession({
  title,
  slug,
  content,
  authorId,
}: CreatPostInput) {
  console.log("createPostSession called");
  console.log("title:", title);
  console.log("slug:", slug);
  console.log("content:", content);
  console.log("authorId:", authorId);
  console.log("SANITY_WRITE_TOKEN:", process.env.SANITY_WRITE_TOKEN);   try {
    const result = await client.create({
      _type: "post",
      title,
      slug: { current: slug },
      body: content,
      author: { _type: "reference", _ref: authorId },
    });
    console.log("Post created:", result);
    return result;
  } catch (error) {
    console.error("Sanity create error:", error);     throw error;   }
}
