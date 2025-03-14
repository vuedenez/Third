import { AppBar, Toolbar, Typography, Container } from '@mui/material'

function Navbar() {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Моя коллекция картин
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar 