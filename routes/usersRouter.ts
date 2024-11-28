import express, { Request, Response } from 'express';
import fs from 'node:fs';

const router = express.Router();

const users: any[] = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/users.json`, 'utf8')
);
router.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        status: 'success',
        users,
    });
});

router.post('/', (req: Request, res: Response) => {
    const newUser = req.body;

    res.status(200).json({
        status: 'success',
        newUser,
    });
});

router.get('/:id', (req: Request, res: Response) => {
    const { id } = req.params;

    const findUser = users.find((user) => user.id === +id);

    res.status(200).json({
        status: 'success',
        user: findUser,
    });
});

router.patch('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const updateUsers = users.map((user) =>
        user.id === +id ? { id: user.id, ...req.body } : user
    );

    res.status(200).json({
        status: 'success',
        updateUsers,
    });
});

router.delete('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const findUser = users.find((user) => user.id === +id);
    const newData = users.filter((user) => user.id !== +id);

    res.status(200).json({
        status: 'success',
        userDeleted: findUser,
        newData,
    });
});

export default router;
