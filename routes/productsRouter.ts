import express, { Request, Response } from 'express';
import fs from 'node:fs';

const router = express.Router();

const products: any[] = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/products.json`, 'utf8')
);
router.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        status: 'success',
        products,
    });
});

router.post('/', (req: Request, res: Response) => {
    const newProducts = req.body;

    res.status(200).json({
        status: 'success',
        newProducts,
    });
});

router.get('/:id', (req: Request, res: Response) => {
    const { id } = req.params;

    const findProduct = products.find((product) => product.id === +id);

    res.status(200).json({
        status: 'success',
        product: findProduct,
    });
});

router.patch('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const updateProducts = products.map((product) =>
        product.id === +id ? { id: product.id, ...req.body } : product
    );

    res.status(200).json({
        status: 'success',
        updateProducts,
    });
});

router.delete('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const findProduct = products.find((product) => product.id === +id);
    const newData = products.filter((product) => product.id !== +id);

    res.status(200).json({
        status: 'success',
        productDeleted: findProduct,
        newData,
    });
});

export default router;
