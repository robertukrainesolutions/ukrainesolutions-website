// GROQ queries for Sanity
// Note: groq is a template tag function, so we use it directly

// GROQ query to get all advocacy post slugs (for static generation)
export const advocacyPostSlugsQuery = `
  *[_type == "advocacyPost" && defined(slug.current)] {
    "slug": slug.current
  }
`;

// GROQ query to get all advocacy posts
export const advocacyPostsQuery = `
  *[_type == "advocacyPost" && defined(slug.current)] | order(coalesce(orderId, 0) desc) {
    _id,
    _type,
    title,
    slug,
    orderId,
    publishedAt,
    excerpt,
    mainImage,
    body
  }
`;

// GROQ query to get a single advocacy post by slug
export const advocacyPostQuery = `
  *[_type == "advocacyPost" && slug.current == $slug][0] {
    _id,
    _type,
    title,
    slug,
    orderId,
    publishedAt,
    excerpt,
    mainImage,
    gallery[]{
      asset,
      alt,
      caption
    },
    body
  }
`;

// GROQ query to get all project post slugs (for static generation)
export const projectPostSlugsQuery = `
  *[_type == "projectPost" && defined(slug.current)] {
    "slug": slug.current
  }
`;

// GROQ query to get all project posts
export const projectPostsQuery = `
  *[_type == "projectPost" && defined(slug.current)] | order(coalesce(orderId, 0) desc) {
    _id,
    _type,
    title,
    slug,
    orderId,
    publishedAt,
    excerpt,
    mainImage,
    body,
    projectType
  }
`;

// GROQ query to get a single project post by slug
export const projectPostQuery = `
  *[_type == "projectPost" && slug.current == $slug][0] {
    _id,
    _type,
    title,
    slug,
    orderId,
    publishedAt,
    excerpt,
    mainImage,
    gallery[]{
      asset,
      alt,
      caption
    },
    body,
    projectType
  }
`;

