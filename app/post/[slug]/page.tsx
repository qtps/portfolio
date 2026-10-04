import { notFound } from 'next/navigation';
import { SinglePost } from '../../../components/single-post';

type SinglePostPageProps = Readonly<{
  params: Promise<{ slug: string }>;
}>;

export function generateStaticParams() {
  return [{ slug: 'maintainable-nextjs-portfolio' }];
}

export default async function SinglePostPage({ params }: SinglePostPageProps) {
  const { slug } = await params;

  if (slug !== 'maintainable-nextjs-portfolio') {
    notFound();
  }

  return <SinglePost />;
}
