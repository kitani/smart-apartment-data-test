export interface SearchRequest {
  query: string;
  provider: SearchProvider;
}

export interface SearchState {
  lastSearch: SearchRequest;
  searchResults: any;
}

export const InitialSearchState: SearchState = {
  lastSearch: {
    provider: null,
    query: null,
  },
  searchResults: null,
};

export type SearchProvider = 'Google' | 'Bing';
