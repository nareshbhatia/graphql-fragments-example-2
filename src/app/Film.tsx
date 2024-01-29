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

export interface FilmProps {
  film: FragmentType<typeof FilmFragment>;
}

export function Film({ film: filmProp }: FilmProps) {
  const film = getFragmentData(FilmFragment, filmProp);
  return (
    <li className="flex flex-col p-4">
      <h2 className="font-semibold">{film.title}</h2>
      <p className="mt-1">{film.releaseDate}</p>
    </li>
  );
}
