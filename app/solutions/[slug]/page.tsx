import { redirect } from "next/navigation";

type Props = {
	params: { slug: string };
	searchParams?: Record<string, string | string[] | undefined>;
};

export default function SolutionRedirectPage({ params, searchParams }: Props) {
	const slug = params.slug;

	const sp = new URLSearchParams();
	if (searchParams) {
		for (const key of Object.keys(searchParams)) {
			const val = searchParams[key];
			if (val === undefined) continue;
			if (Array.isArray(val)) {
				val.forEach((v) => sp.append(key, v));
			} else {
				sp.append(key, val);
			}
		}
	}

	const search = sp.toString() ? `?${sp.toString()}` : "";

	// Server-side redirect to the canonical services route
	redirect(`/services/${encodeURIComponent(slug)}${search}`);
}
