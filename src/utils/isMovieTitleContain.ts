import { IMovie } from "../types";

export const isMovieTitleContain = (movie: IMovie, title: string): boolean => {
  return movie.title.toLowerCase().includes(title.toLowerCase());
};
