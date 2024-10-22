import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('List of products')
})

router.get('/:id', (req, res) => {
    console.log(req.params.id);
    
    res.send('List of products')
})

router.post('/', (req, res) => {
    res.send('new product created')
});


export default router;