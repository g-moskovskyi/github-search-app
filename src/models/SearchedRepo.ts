import { Repository } from "./Repository";

export interface SearchedRepo {
    total_count: number;
    incomplete_results: boolean;
    items: Repository[];
}