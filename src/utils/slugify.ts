export function getPostSlug(post: any): string {
  if (post?.data?.slug && String(post.data.slug).trim() !== '') {
    return String(post.data.slug).trim();
  }
  const rawId = post?.slug || post?.id || '';
  return rawId
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}
