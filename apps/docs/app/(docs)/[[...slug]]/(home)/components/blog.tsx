import { PostsFeed } from "@/components/posts-feed";
import { POSTS_PAGE_SIZE } from "@/lib/constants";
import { fetchGhostPosts } from "@/lib/ghost";

export default async function Blog() {
  const { posts, pagination } = await fetchGhostPosts({
    limit: POSTS_PAGE_SIZE,
    page: 1,
  });
  const currentPage = pagination?.page ?? 1;
  const totalPages = pagination?.pages ?? 1;

  return (
    <div className="grid items-center gap-8">
      {posts.length === 0 ? (
        <p className="text-center text-muted-foreground sm:text-left">
          No posts found. Add content in Ghost to see it appear here.
        </p>
      ) : (
        <PostsFeed
          initialPage={currentPage}
          initialPosts={posts}
          totalPages={totalPages}
        />
      )}
    </div>
  );
}
