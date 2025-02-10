import Link from "next/link";

const writings = [
  {
    title: "Building Symbiotic Systems",
    date: "2024-02-09",
    slug: "building-symbiotic-systems",
  },
  {
    title: "The Future of Human-AI Collaboration",
    date: "2024-02-01",
    slug: "future-of-human-ai-collaboration",
  },
];

const links = [
  { name: "Twitter", url: "https://twitter.com/pradz_eth" },
  { name: "GitHub", url: "https://github.com/pradz" },
  { name: "Substack", url: "https://symbiotic.substack.com" },
  { name: "LinkedIn", url: "https://linkedin.com/in/pradyumnwasthi" },
];

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Pradyumn Wasthi</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Co-founder of Symbiotic Inc, building intelligent systems that augment and amplify human cognition.
          Exploring the intersection of artificial intelligence and human potential.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Writings</h2>
        <div className="space-y-4">
          {writings.map((post) => (
            <div key={post.slug} className="flex justify-between items-center">
              <Link
                href={`/posts/${post.slug}`}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {post.title}
              </Link>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {post.date}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Other Links</h2>
        <div className="flex flex-wrap gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
