const express =  require('express');
const productRouter = express.Router();

function router(final_menu){

    productRouter.route('/')
        .get((req, res) => {
            res.render('product', {
                title: 'Product',
                menu: final_menu
            })
        })

    productRouter.route('/details')
        .get((req, res) => {
            res.render('productDetails', {
                title: 'Product details',
                menu: final_menu
            })
        })
        return productRouter
    }
    module.exports = router;