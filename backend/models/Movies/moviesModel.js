import { DataTypes } from "sequelize";
import db from "../../database/database.js";
import Genre from "../Genre/genreModel.js";
import MoviesGenreDetails from "../Movies_Genre_Details/moviesGenreDetailsModel.js";
import MovieCast from "../Movie_Cast/movieCast.js";
import MoviesCastDetails from "../Movie_Cast_Details/movieCastDetails.js";

const Movies = db.define(
    'Movies',
    {
        id_movies : {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false
        },
        title : {
            type: DataTypes.STRING,
            allowNull: false
        },
        description : {
            type: DataTypes.STRING,
            allowNull: false
        },
        duration_minutes: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        release_year : {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating : {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        poster_url : {
            type: DataTypes.STRING,
            allowNull: false
        },
        movie_trailer : {
            type: DataTypes.STRING,
            allowNull: false
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

