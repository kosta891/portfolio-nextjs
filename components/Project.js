import { useRouter } from 'next/router';

export default function Projects() {
  const router = useRouter();
  const { slug } = router.query;
  console.log(router, slug);
  return <div>single project</div>;
}
