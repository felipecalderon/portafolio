export default function handler(req, res) {
    switch (req.method) {
        case 'GET': {
            return res.status(200).json([
                {
                    name: 'Inicio',
                    link: '/'
                }
            ])
        }
        default: {
           return res.status(200).json({ message: 'Metodo no aceptado' })
        }
    }
  }