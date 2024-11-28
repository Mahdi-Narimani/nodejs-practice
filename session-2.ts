import express, { Express, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import fs from 'node:fs';

const app: Express = express();
app.use(express.json());

dotenv.config({ path: './config.env' });
console.log(
    '\x1b[36m',
    'Type of development environment:',
    '\x1b[32m',
    process.env.NODE_ENV
);

if (process.env.NODE_ENV) {
    app.use(morgan('dev'));
}

// * 1. Building a RESTful API for product management
/*
const products: any[] = JSON.parse(
    fs.readFileSync(`${__dirname}/data/products.json`, 'utf8')
);

const checkBody = (req: Request, res: Response, next: NextFunction) => {
    const { name, price } = req.body;

    if (!name || !price) {
        res.status(400).json({
            status: 'Bad Request',
            message: 'Both name and price parameters must be passed',
        });
    } else {
        next();
    }
};

app.get('/products', (req: Request, res: Response) => {
    res.status(200).json({
        status: 'success',
        products: {
            ...products,
        },
    });
});

app.post('/products', checkBody, (req: Request, res: Response) => {
    const body = req.body;

    const newProduct = {
        id: products[products.length - 1].id + 1,
        ...body,
    };

    res.status(200).json({
        status: 'success',
        newProduct: {
            ...newProduct,
        },
    });
});

app.get('/products/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const product = products.find((item) => item.id === +id);

    res.status(200).json({
        status: 'success',
        product: {
            ...product,
        },
    });
});

app.patch('/products/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const body = req.body;
    const updateProducts = products.map((product) =>
        product.id === +id ? { id: product.id, ...body } : product
    );

    res.json({
        updateProducts,
    });
});

app.delete('/products/:id', (req: Request, res: Response) => {
    const { id } = req.params;

    const deleteProduct = products.filter((product) => product.id !== +id);

    res.json({
        deleteProduct,
    });
});
*/
// ! 1. The End practice 1

// ****************************************************************

// * 2. Serving static files

// app.use('/static', express.static(`${__dirname}/public`));

// ! 2. The End practice 2

// * 3. Refactoring routes using multiple routers

import usersRouter from './routes/usersRouter';
import productsRouter from './routes/productsRouter';

app.use('/users', usersRouter);
app.use('/products', productsRouter);

// ! 3. The End practice 3

app.listen(5000, '127.0.0.1', () => {
    console.log('Server running on:', '\x1b[32m', 'http://127.0.0.1:5000');
});
