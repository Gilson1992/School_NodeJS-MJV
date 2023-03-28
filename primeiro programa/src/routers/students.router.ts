import { Request, Response, Router } from "express";

const router = Router();

const students = [
    {
        name: 'Gilson Souza da Silva',
        email: 'gilson@gmail.com',
        document: '75164012006',
        password: '12345678',
        age: 30
    },
    {
        name: 'Gustavo Damasceno',
        email: 'gustavo@gmail.com',
        document: '43629153038',
        password: '1234567',
        age: 29
    },
    {
        name: 'Bem-te-vi',
        email: 'passaro@gmail.com',
        document: '19009024008',
        password: '123456',
        age: 28
    },
    {
        name: 'Izabel Damasceno',
        email: 'izabel@gmail.com',
        document: '92904203087',
        password: '12345',
        age: 27
    },
    {
        name: 'Geni Souza',
        email: 'geni@gmail.com',
        document: '64771486093',
        password: '1234',
        age: 26
    },
    {
        name: 'Bruno Souza',
        email: 'bruno@gmail.com',
        document: '11287272002',
        password: '123',
        age: 25
    },
    {
        name: 'Roberto Pacheco',
        email: 'roberto@gmail.com',
        document: '91933259086',
        password: '12',
        age: 24
    }
];

router.get('/', (req: Request, res: Response) => {
    res.send(students);
});

router.get('/:document', (req: Request, res: Response) =>{
    const student = students.find((std) => std.document === req.params.document);
    if(!student) return res.status(400).send({ message: "Estudante não Encontrado" });
    res.status(200).send(student)
});

router.post('/', (req: Request, res: Response) => {
    if (req.body.age < 18) {
        return res.status(400).send({ message: "Estudante nao atingiu a idade minima" });
    }
    students.push(req.body);
    res.status(201).send({ message: 'Estudante criado com Sucesso' });
});

router.delete('/remove/:document', (req: Request, res: Response) => {
    const studentsIndex = students.findIndex((student) => student.document === req.params.document);
    if (studentsIndex === -1) {
        res.status(400).send({ message: "estudante não encontrado" });
    }

    students.splice(studentsIndex, 1);
    res.status(200).send({ message: "Estudante Removido com Sucesso" });
});

router.put('/:document', (req: Request, res: Response) => {
    const studentsIndex = students.findIndex((student) => student.document === req.params.document);
    if (studentsIndex === -1) {
        res.status(400).send({ message: "estudante não encontrado" });
    }
    students[studentsIndex] = req.body;
    res.status(200).send({ message: "Estudante Atualizado com Sucesso!" })
});

export default router;