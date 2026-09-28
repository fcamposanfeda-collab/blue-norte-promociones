import { getPost, postCategories, posts } from "@/content/posts";

export const POSTS_PER_PAGE = 6;

export function getAllPosts() {
  return posts;
}

export function getPostCategories() {
  return postCategories;
}

export { getPost };

export function filterPosts(category?: string) {
  if (!category) return posts;
  return posts.filter((post) => post.categorySlug === category);
}

export function paginatePosts(category: string | undefined, page: number) {
  const filtered = filterPosts(category);
  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  return {
    posts: filtered.slice(start, start + POSTS_PER_PAGE),
    total: filtered.length,
    totalPages,
    currentPage,
  };
}

export function getRelatedPosts(slug: string) {
  return posts.filter((post) => post.slug !== slug).slice(0, 2);
}
