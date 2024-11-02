export async function generateStaticParams() {
  // optional function
  const posts =
    // await fetch('https://.../posts').then((res) => res.json());
    ['dashboard', 'profile', 'about'];
  console.log('generating routes statically at build time');
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return <h1>My Post: {params.slug}</h1>;
}
