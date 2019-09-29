import { Repository } from "./Repository";

export interface SearchedRepos {
    total_count: number;
    incomplete_results: boolean;
    items: Repository[];
}