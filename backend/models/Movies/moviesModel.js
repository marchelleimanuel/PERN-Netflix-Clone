import { DataTypes } from "sequelize";
import db from "../../database/database.js";
import Genre from "../Genre/genreModel.js";
import MoviesGenreDetails from "../Movies_Genre_Details/moviesGenreDetailsModel.js";
import MovieCast from "../Movie_Cast/movieCast.js";
import MoviesCastDetails from "../Movie_Cast_Details/movieCastDetails.js";

const Movies = db.define(
    'Movies',
    {
        idMovies : {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            field: 'id_movies'
        },
        title : {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'title'
        },
        description : {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'description'
        },
        durationMinutes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'duration_minutes'
        },
        releaseYear : {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'release_year'
        },
        rating : {
            type: DataTypes.DECIMAL,
            allowNull: false,
            field: 'rating'
        },
        posterUrl : {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'poster_url'
        },
        movieTrailer : {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'movie_trailer'
        },
    },
    {
        timestamps: false,
        tableName: 'movies'
    }
)

Movies.belongsToMany(Genre, {
    through: MoviesGenreDetails,
    foreignKey: 'id_movies',
    otherKey: 'id_genre'
})

Movies.belongsToMany(MovieCast, {
    through: MoviesCastDetails,
    foreignKey: 'id_movies',
    otherKey: 'id_movies_cast'
})

export default Movies;

