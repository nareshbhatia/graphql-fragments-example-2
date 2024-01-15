'use client';

import { graphql } from '@/generated/gql';
import { useQuery } from '@apollo/client';
import { Film } from './Film';

/*
 * "query allFilmsWithVariablesQuery" generates:
 *   1. AllFilmsWithVariablesQueryQuery
 *   2. AllFilmsWithVariablesQueryQueryVariables
 *   3. AllFilmsWithVariablesQueryDocument
 */
const allFilmsWithVariablesQueryDocument = graphql(/* GraphQL */ `
  query allFilmsWithVariablesQuery($first: Int!) {
    allFilms(first: $first) {
      edges {
        node {
          ...FilmItem
        }
      }
    }
  }
`);

export default function FilmsPage() {
  const { data } = useQuery(allFilmsWithVariablesQueryDocument, {
    variables: {
      first: 10,
    },
  });

  return (
    <div className="mx-auto max-w-3xl p-4">
      {data && (
        <ul className="divide-y">
          {data.allFilms?.edges?.map(
            (e, i) => e?.node && <Film film={e?.node} key={`film-${i}`} />,
          )}
        </ul>
      )}
    </div>
  );
}
