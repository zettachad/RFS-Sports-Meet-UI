import type { PageServerLoad } from "./$types";
import { api } from "$lib/info";
export const load: PageServerLoad = async ({ fetch }) => {
  const photos = fetch(api + "pending_tech").then((r) => r.json());
  return { photos: photos };
}