import { headers } from "next/headers";

export async function GET() {
  const response = await fetch(
    "https://api.github.com/users/AlexanderZirngast/repos",
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    },
  );

  const repos = await response.json();

  const reposWithLanguages = await Promise.all(
    repos.map(async (repo: any) => {
      const languages = await fetch(repo.languages_url, {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      }).then((res) => res.json());

      return { ...repo, languages: Object.keys(languages) };
    }),
  );
  return Response.json(reposWithLanguages);
}
