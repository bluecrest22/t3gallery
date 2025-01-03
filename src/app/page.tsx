import { db } from "../server/db/index";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/gMuN1NEay7O2ZQY9eVCJ58pSRcbTFPuVotxHlWnC3h2IZUwe",
  "https://utfs.io/f/gMuN1NEay7O26ZuCdt9JtkuLAZf0xIYbUMTwWzeBFp8JKaPj",
  "https://utfs.io/f/gMuN1NEay7O2TYhmMjlhadtlY4iIuLHFW29Kce0bp71xmvkE",
  "https://utfs.io/f/gMuN1NEay7O2EDeX0hwztdai21DIQpPAO9lk0837zxZVWFgG",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {

  const posts = await db.query.posts.findMany();
  {posts.map((post) => (<div key={post.id}>{post.name}</div>))}

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (<div key={post.id}>{post.name}</div>))} 
        {mockImages.map((image) => ( 
          <div key={image.id} className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <img src={image.url} />
          </div>
        ))
      }
      </div>
      Hello (gallery in progress)
    </main>
  );
}
