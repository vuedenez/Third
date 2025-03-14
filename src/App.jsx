import { Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from './components/Navbar'
import Gallery from './pages/Gallery'
import PaintingDetail from './pages/PaintingDetail'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/painting/:id" element={<PaintingDetail />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App 