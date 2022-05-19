import Express from "express"
import Mongoose from "mongoose"
import Cors from "cors"
import titles from "./dbnavigation.js"
import trends from "./dbTrending.js"
import toprated from "./dbTopRated.js"
import comedies from "./dbComedy.js"
import horrors from "./dbHorror.js"
import romances from "./dbRomance.js"
import mysteries from "./dbMystery.js"
import fictions from "./dbSciFi.js"
import animations from "./dbAnimations.js"
import movies from "./dbMovies.js"

//app config
const app = Express()
const port = process.env.PORT || 1000
const connection_url = "mongodb://localhost/hulu"
//middlewares
app.use(Express.json())
app.use(Cors())
//db config
Mongoose.connect(connection_url)
//API endpoints
app.get("/", (req, res) => { res.status(200).send("Hello world") })

app.post("/titles", (req, res) =>
{
    const titlesPlace = req.body

    titles.create(titlesPlace, (err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})

app.get("/titles", (req, res) =>
{
    titles.find((err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else {
            // res.status(201).send(data)
            for (let i = 0; i < data.length; i++) {
                console.log(data[i]._id);

            }
            // console.log(data.length);
        }
    })
})
//testing
app.get("/titles/:id", async (req, res) =>
{
    const id = req.params.id;
    const result = await titles.findById(id);
    if (result) {
        return res.send(result)
    }
})
app.post("/trends", (req, res) =>
{
    const trendsPlace = req.body

    trends.create(trendsPlace, (err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})


app.get("/trends", (req, res) =>
{
    trends.find((err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})


app.post("/toprated", (req, res) =>
{
    const topRatedPlace = req.body

    toprated.create(topRatedPlace, (err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})

app.get("/toprated", (req, res) =>
{
    toprated.find((err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})


app.post("/comedies", (req, res) =>
{
    const comedyPlace = req.body

    comedies.create(comedyPlace, (err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})


app.get("/comedies", (req, res) =>
{
    comedies.find((err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})

app.post("/horrors", (req, res) =>
{
    const horrorsPlace = req.body

    horrors.create(horrorsPlace, (err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})

app.get("/horrors", (req, res) =>
{
    horrors.find((err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})

app.post("/romances", (req, res) =>
{
    const romancePlace = req.body

    romances.create(romancePlace, (err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })

})

app.get("/romances", (req, res) =>
{
    romances.find((err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})

app.post("/mysteries", (req, res) =>
{
    const mysteriesPlace = req.body

    mysteries.create(mysteriesPlace, (err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })

})

app.get("/mysteries", (req, res) =>
{
    mysteries.find((err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})


app.post("/fictions", (req, res) =>
{
    const fictionsPlace = req.body

    fictions.create(fictionsPlace, (err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})

app.get("/fictions", (req, res) =>
{
    fictions.find((err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})


app.post("/animations", (req, res) =>
{
    const animationsPlace = req.body

    animations.create(animations, (err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})

app.get("/animations", (req, res) =>
{
    animations.find((err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})

app.post("/movies", (req, res) =>
{
    const moviesPlace = req.body

    movies.create(moviesPlace, (err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})

app.get("/movies", (req, res) =>
{
    movies.find((err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})
//listener
app.listen(port, () => { console.log(`listening on localhost:${port}`) })