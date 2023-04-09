export default function handler(req, res) {
    switch (req.method) {
        case 'GET': {
            return res.status(200).json([
                {
                    name: 'Mi historia',
                    link: '/historia'
                },
                {
                    name: 'Proyectos y Experiencias',
                    link: '/experiencias'
                },
                {
                    name: 'Habilidades',
                    link: '/habilidades'
                },
                {
                    name: 'Contacto',
                    link: '/contacto'
                }

            ])
        }
        default: {
           return res.status(200).json({ message: 'Metodo no aceptado' })
        }
    }
  }