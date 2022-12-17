import { ThemeProvider } from 'styled-components'
import { CartContextProvider } from './context/CartContext'
import { ProductsContextProvider } from './context/ProductsContext'
import { Router } from './router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ProductsContextProvider>
        <CartContextProvider>
          <Router />
          <GlobalStyle />
          <ToastContainer />
        </CartContextProvider>
      </ProductsContextProvider>
    </ThemeProvider>
  )
}
