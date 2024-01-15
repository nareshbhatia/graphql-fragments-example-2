import { graphql, useFragment, FragmentType } from '@/generated/gql';

export const FilmFragment = graphql(/* GraphQL */ `
  fragment FilmItem on Film {
    id
    title
    releaseDate
    producers
  }
`);

export function Film(props: { film: FragmentType<typeof FilmFragment> }) {
  const film = useFragment(FilmFragment, props.film);
  return (
    <div className="flex flex-col p-4">
      <h2 className="font-semibold">{film.title}</h2>
      <p className="mt-1">{film.releaseDate}</p>
    </div>
  );
}
