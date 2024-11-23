export interface SearchQuery {
    term: string;
    filters?: {
        species?: string;
        location?: string;
    };
}