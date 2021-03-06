const {Router} = require('express')
const router = Router();
const {addCatagory,
       getCatagory,
       getBookByCatagory,
       addBookToCatagory} = require('../controller/catagory');

router.post('/',addCatagory);
router.get('/',getCatagory);
router.post('/book',addBookToCatagory);
router.get('/book', getBookByCatagory)

module.exports = router;
