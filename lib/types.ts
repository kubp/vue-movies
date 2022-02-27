export interface Movie {
    id: number;
    name: string;
    year: number;
    runtime: number;
    categories: Array<string>;
    releaseDate: string;
    director: string;
    writer: Array<string> | string;
    actors: Array<string>;
    storyline?: string;
  }
  