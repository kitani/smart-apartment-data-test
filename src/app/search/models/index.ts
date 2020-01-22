export interface SearchRequest {
  query: string;
  provider: SearchProvider;
}

export interface SearchState {
  lastSearch: SearchRequest;
  searchResults: {
    results: any;
    request: SearchRequest;
  };
}

export const InitialSearchState: SearchState = {
  lastSearch: {
    provider: null,
    query: null,
  },
  searchResults: {
    results: null,
    request: {
      provider: null,
      query: null,
    }
  },
};

export type SearchProvider = 'Google' | 'Bing';
