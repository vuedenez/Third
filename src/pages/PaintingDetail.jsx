import { useParams } from 'react-router-dom'
import { Container, Paper, Typography, Box } from '@mui/material'
import { paintings } from '../data/paintings'

// Импортируем изображения
import painting1 from '../assets/IMG_1875.JPG'
import painting2 from '../assets/IMG_1869.PNG'
import painting3 from '../assets/IMG_1863.PNG'
import painting4 from '../assets/IMG_1861.JPG'
import painting5 from '../assets/IMG_1643.JPG'

function PaintingDetail() {
  const { id } = useParams()
  const painting = paintings.find(p => p.id === parseInt(id))

  if (!painting) {
    return (
      <Container>
        <Typography variant="h4">Картина не найдена</Typography>
      </Container>
    )
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <img
            src={painting.imageUrl}
            alt={painting.title}
            style={{ width: '100%', maxHeight: '600px', objectFit: 'contain' }}
          />
          <Typography variant="h4" component="h1">
            {painting.title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {painting.artist}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Год создания: {painting.year}
          </Typography>
          <Typography variant="body1">
            {painting.description}
          </Typography>
        </Box>
      </Paper>
    </Container>
  )
}

export default PaintingDetail 