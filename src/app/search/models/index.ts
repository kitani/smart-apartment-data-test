export interface SearchRequest {
  query: string;
  provider: SearchProvider;
}

export type SearchProvider = 'Google' | 'Bing';
