const postsData = require('../data/postsData')

//index
const index = (req, res) => {
    let postsFiltered = postsData;
    const { ingredienti } = req.query;
    if (ingredienti) {
        postsFiltered = postsFiltered.filter((post) =>
            post.ingredienti.includes(ingredienti)
    );
    }
    res.json(postsFiltered);
};

//show
const show = (req, res)  => {
    const post = posts.Data.find((elm) => elm.id == req.params.id);
    if (!post) {
        return res.status(404).json({
            error: "Post not found",
        });
    }
    res.json(post);
}

//create
const store = (req, res) => {
    console.log(req.body)
    const newId = postsData[postsData.length - 1].id + 1
    const newPost = {
        id: newId,
        name: req.body.name,
        image: req.body.image,
        ingredienti: req.body.ingredienti
    }

    postsData.push(newPost)

    res.sendStatus(201);
}

//update
const update = (req, res) => {
    res.send(`Modifica integrale del post: ${req.params.id}`)
}

//delete
const destroy = (req, res) => {
    const post = postsData.find((elm) => elm.id == req.params.id)
    if (!post) {
        return res.status(404).json({
            error: "Post not found",
        });
    }
    postsData.splice(postsData.indexOf(pizza), 1);
    res.sendStatus(204);
};

module.exports = { index, show, store, update, destroy }