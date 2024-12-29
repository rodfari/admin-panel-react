import { RouterProvider } from 'react-router-dom'
import './App.sass'
import { AppRouter } from './routes'

function App() {

  return <RouterProvider router={AppRouter} />
  
}

export default App
