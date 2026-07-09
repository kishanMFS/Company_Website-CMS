'use client';
import { notFound } from 'next/navigation';
import Link from 'next/link';
// import { blogs } from '@/app/data/blogs';
interface Props {
  params: { slug: string };
}

export interface Blog {
  slug: string;
  title: string;
  author: string;
  publishedAt: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
}
export const blogs: Blog[] = [
  {
    slug: 'future-of-artificial-intelligence',
    title: 'The Future of Artificial Intelligence',
    author: 'Kishan Prajapati',
    publishedAt: 'July 8, 2026',
    category: 'Technology',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200',
    excerpt:
      'Discover how AI is transforming industries with automation, predictive analytics, and intelligent decision-making.',
    content: ` Artificial Intelligence has become one of the fastest growing technologies in the world. Businesses are leveraging AI to improve customer experience, automate workflows, reduce costs, and gain valuable insights. ### Why AI Matters AI enables organizations to process massive amounts of data, identify patterns, and make predictions faster than humans. ### Benefits • Automation • Better Decision Making • Personalization • Improved Productivity ### Conclusion The future of AI is incredibly promising and organizations that embrace it early will gain a significant competitive advantage. `,
  },
  {
    slug: 'why-every-business-needs-a-modern-website',
    title: 'Why Every Business Needs a Modern Website',
    author: 'Admin',
    publishedAt: 'July 5, 2026',
    category: 'Business',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
    excerpt:
      'A modern website helps businesses build trust, generate leads, and increase online visibility.',
    content: ` Your website is your digital storefront. Customers expect responsive, fast-loading, and attractive websites. Investing in a professional website can significantly improve conversions and customer trust. `,
  },
  {
    slug: 'cloud-computing-for-startups',
    title: 'Cloud Computing for Startups',
    author: 'Kishan Prajapati',
    publishedAt: 'June 30, 2026',
    category: 'Cloud',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200',
    excerpt:
      'Cloud services help startups reduce infrastructure costs while improving scalability and security.',
    content: ` Cloud platforms like AWS, Azure, and Google Cloud enable businesses to scale rapidly. Startups can launch products quickly without investing heavily in hardware. `,
  },
];
export default function BlogDetails({ params }: Props) {
  const blog = blogs.find((item) => item.slug === params.slug);
  if (!blog) {
    notFound();
  }
  return (
    <main className="bg-gray-50">
      {' '}
      <div className="relative h-112.5">
        {' '}
        <img
          src={blog.image}
          alt={blog.title}
          className="h-full w-full object-cover"
        />{' '}
        <div className="absolute inset-0 bg-black/60" />{' '}
        <div className="absolute inset-0 flex items-center">
          {' '}
          <div className="mx-auto max-w-5xl px-6 text-white">
            {' '}
            <span className="rounded-full bg-indigo-500 px-4 py-2 text-sm">
              {' '}
              {blog.category}{' '}
            </span>{' '}
            <h1 className="mt-6 text-5xl font-bold"> {blog.title} </h1>{' '}
            <div className="mt-5 flex gap-6 text-indigo-100">
              {' '}
              <span>{blog.author}</span> <span>{blog.publishedAt}</span>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
      <section className="mx-auto max-w-4xl px-6 py-20">
        {' '}
        <article className="prose prose-lg max-w-none whitespace-pre-line rounded-2xl bg-white p-10 shadow">
          {' '}
          {blog.content}{' '}
        </article>{' '}
        <div className="mt-12">
          {' '}
          <Link
            href="/blog"
            className="rounded-lg bg-indigo-600 px-6 py-3 text-white transition hover:bg-indigo-700"
          >
            {' '}
            -- Back to Blogs{' '}
          </Link>{' '}
        </div>{' '}
      </section>{' '}
    </main>
  );
}
