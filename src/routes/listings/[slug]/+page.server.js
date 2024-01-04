
export function load({ params }) {
    const slug = params.slug;
	return {
		game: {
			slug: slug
		}
	};
}
