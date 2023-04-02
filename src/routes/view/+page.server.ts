import type { PageServerLoad } from "./$types";
export const load: PageServerLoad = async ({ fetch }) => {
  const photos = fetch("https://api.rfs-sports.kush.in/getall").then((r) => r.json());
  return { photos: photos };
}