import { db } from "~/server/db";

const mockURLs = [
  "https://utfs.io/f/e109e9e1-e8a4-4344-bc32-22f40914611f-ejso4k.jpg",
  "https://utfs.io/f/c2489b59-b15d-4017-9493-3912b0b0e401-ejso1z.jpg",
  "https://utfs.io/f/3154ef54-a0b7-40ff-8aa9-2d6b25fb97c5-ejso14.jpg",
  "https://utfs.io/f/c0a81feb-0bb0-49ac-9af9-63b0f71b34c9-ejso09.jpg",
  "https://utfs.io/f/1b0c8979-1497-4b65-8bb0-9302010a579e-ejsnze.jpg",
  "https://utfs.io/f/4a4bd54e-6247-4cca-8af9-9789f0a0d7f6-ejsnyj.jpg",
  "https://utfs.io/f/f6c1a700-8d8e-4380-b7a1-5b81e741720e-ejsnxo.jpg",
  "https://utfs.io/f/ed58ce7d-3eac-42d5-9a04-e580300b9546-ejsnwt.jpg",
];

const mockImages = mockURLs.map((url, index) => ({
  id: index + 1,
  url,
}));

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}

        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className=" w-96">
            <img src={image.url} alt="" />
          </div>
        ))}
      </div>
    </main>
  );
}
