import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  console.log(await parent, await params, await searchParams);
  return {
    title: 'good',
  };
}

export default function Page({
  params,
}: {
  params: { slug: string; slug2: Array<string> };
}) {
  return (
    <>
      <h1>
        My Post: {params.slug} : {params.slug2.join()}
      </h1>
      <p>/dashboard/profile/a/b/c?id=3</p>
    </>
  );
}
