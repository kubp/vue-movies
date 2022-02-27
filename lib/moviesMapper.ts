import { Movie } from "./types"

export const moviesMapper = (movies): Movie[] => {
    return movies.map((movie)=> {
        return {...movie, releaseDate: movie['release-date']}
    })
}
