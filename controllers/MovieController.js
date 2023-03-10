let movieService = require('../services/MovieService');
const getAllMovie = async function (req, res, next) {
    try {
        const movies = await movieService.getAllMovie();
        if(!movies) throw Error('No movies');
        await res.status(200).json(movies);

    }catch(err)
    {
        await res.status(400).json({message: err})
    }
}
const getMovieByPage = async function(req, res, nextt) {
    try {
        const MovieList = [];
        let movieCount = 8;
        let getMovieCount = 0 ;
        let getMovieById = 0;
        let pageId = req.params['PageId'];
        const movies = await movieService.getAllMovie();
        if(pageId > 0){
            getMovieById = movieCount * pageId ;
            getMovieCount = getMovieById + 8 ;
            for(let i = 0 ;i<movies.length;i++){
                if(i >= getMovieById){
                    if(i == getMovieCount){
                        break;
                    }
                    MovieList.push(movies[i])
                }
            }
            console.log("MovieList ", MovieList)
        }
        if(pageId == 0 ){
            for(let i = 0 ; i<movies.length;i++){
                MovieList.push(movies[i])
                if(i == 7){
                    break
                }
            }
        }
        await res.status(200).json(MovieList);
    }catch(err)
    {
        await res.status(404).json({message: err})
    }

}
const getMovieById = async function (req,res,next)
{
    let movieId = req.params['movieId'];
    console.log('Req movie Id ', movieId);
    try {
        const movies = await movieService.getMovieById(movieId);
        if(!movies) throw Error('No movies found');
        await res.status(200).json(movies);

    }catch(err)
    {
        await res.status(404).json({message: err})
    }
}
const findMovieByTitle = async function (req,res,next)
{
    let title = req.params['title'];
    try {
        const movies = await movieService.searchMovieByTitle(title);
        if(!movies) throw Error('No movies found');
        await res.status(200).json(movies);

    }catch(err)
    {
        await res.status(404).json({message: err})
    }
}

const newMovie = async function(req,res,next)
{
    console.log("new movie ",req.body);
    try {
        const movie = await movieService.newMovie(req.body);
        if(!movie) throw Error('Cannot save movie');
        await res.status(201).json(movie);

    }catch(err)
    {
        console.log(err);
        await res.status(400).json({message: err})
    }
}
const updateMovie = async function (req,res,next)
{
    let movieId = req.params['movieId'];
    let movie = req.body;
    console.log(`new movie ${movieId} `,req.body);
    try {
        const updateMovie = await movieService.updateMovie(movieId,movie);
        if(!updateMovie) throw Error('Cannot update movie');
        await res.status(200).json(updateMovie);

    }catch(err)
    {
        await res.status(400).json({message: err})
    }
}
const deleteMovie = async (req,res,next)=>{
    let movieId = req.params['movieId'];
    try {
        const deletedMovie = await movieService.deleteMovie(movieId);
        if(!deletedMovie) throw Error('Cannot delete movie');
        await res.status(200).json(deletedMovie);

    }catch(err)
    {
        await res.status(400).json({message: err})
    }
}
module.exports = {
    getAllMovie,
    getMovieById,
    findMovieByTitle,
    newMovie,
    updateMovie,
    deleteMovie,
    getMovieByPage
}
