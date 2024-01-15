import { graphql, getFragmentData, FragmentType } from '@/generated/gql';

/*
 * "fragment FilmItem" generates:
 *   1. FilmItemFragment
 *   2. FilmItemFragmentDoc
 */
export const FilmFragment = graphql(/* GraphQL */ `
  fragment FilmItem on Film {
    id
    title
    releaseDate
    producers
  }
`);

export function Film(props: { film: FragmentType<typeof FilmFragment> }) {
  const film = getFragmentData(FilmFragment, props.film);
  return (
    <li className="flex flex-col p-4">
      <h2 className="font-semibold">{film.title}</h2>
      <p className="mt-1">{film.releaseDate}</p>
    </li>
  );
}
