const Bhaskara = {
    get: (req, res) => {
        res.status(200).send('get')
    },
    pasos: (req, res) => {
        res.status(200).send('Pasos')
    },
    create: (req, res) => {
        res.status(201).send("Creando")
    },
    update: (req, res) => {
        res.status(204).send('Acualizando')
    },
    destroy: (req, res) => {
        res.status(204).send('Eliminando')
    }

}

module.exports = Bhaskara