// src/routes/blog/+page.server.ts
import type { Metadata } from '$types/blog';
import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async () => {
    const metas: Metadata[] = await fetch('http://localhost:3000/api/blogs').then((res) => res.json());
    return { metas };
}
