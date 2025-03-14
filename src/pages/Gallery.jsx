import { Container, Grid, Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { paintings } from '../data/paintings'

function Gallery() {
  const navigate = useNavigate()

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {paintings.map((painting) => (
          <Grid item key={painting.id} xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea onClick={() => navigate(`/painting/${painting.id}`)}>
                <CardMedia
                  component="img"
                  height="300"
                  image={painting.imageUrl}
                  alt={painting.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {painting.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {painting.artist}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {painting.year}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Gallery 