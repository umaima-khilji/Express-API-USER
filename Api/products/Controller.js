const getAllProducts = (req, res) =>{
    res.json({
        products : [
           {
            "id" : 2,
            "title" : "Iphone X"
           }

        ]
    })

}

const addProducts = (req, res) =>{
    res.status(200).json({
        message: "Added Sucessfully"
    })
}

module.exports = {getAllProducts, addProducts}