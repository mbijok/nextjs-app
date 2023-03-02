import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link href="/posts/first-post">LINK</Link>
      <h1 className="text-4xl">Hello</h1>
    </>
  );
}
