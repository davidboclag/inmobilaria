import { Property } from "./Property";

export interface PaginationProperty {
    current_page: number;
    data: Property[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: null;
    to: number;
    total: number;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toPaginationProperty(json: string): PaginationProperty {
        return JSON.parse(json);
    }

    public static paginationPropertyToJson(value: PaginationProperty): string {
        return JSON.stringify(value);
    }
}
