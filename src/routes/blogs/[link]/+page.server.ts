import type { PageServerLoad } from './$types';
import type { Post } from '$types/blog';
export const load: PageServerLoad = async ({ params }) => {
	const { link } = params;
	const post: Post = await fetch(`http://localhost:3000/api/blog`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ link })
	}).then((res) => res.json());
	return { post };
};