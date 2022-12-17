import { Children, createContext, ReactNode, useState } from 'react'
import { Product } from '../@types/global'

interface ProductsContextType {
  products: Product[]
}
export const ProductsContext = createContext({} as ProductsContextType)

interface ProductsContextProviderProps {
  children: ReactNode
}

const productList: Product[] = [
  {
    id: '1',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    categories: ['tradicional'],
    thumb: '/01-expresso-tradicional.svg',
  },
  {
    id: '2',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    categories: ['tradicional'],
    thumb: '/02-expresso-americano.svg',
  },
  {
    id: '3',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    categories: ['tradicional'],
    thumb: '/03-expresso-cremoso.svg',
  },
  {
    id: '4',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    categories: ['tradicional', 'gelado'],
    thumb: '/04-expresso-gelado.svg',
  },
  {
    id: '5',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    categories: ['tradicional', 'com leite'],
    thumb: '/05-cafe-com-leite.svg',
  },
  {
    id: '6',
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    categories: ['tradicional', 'com leite'],
    thumb: '/06-latte.svg',
  },
  {
    id: '7',
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    categories: ['tradicional', 'com leite'],
    thumb: '/07-capuccino.svg',
  },
  {
    id: '8',
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    categories: ['tradicional', 'com leite'],
    thumb: '/08-macchiato.svg',
  },
  {
    id: '9',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    categories: ['tradicional', 'com leite'],
    thumb: '/09-mocaccino.svg',
  },
  {
    id: '10',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    categories: ['tradicional', 'alcólico', 'com leite'],
    thumb: '/10-chocolate-quente.svg',
  },
  {
    id: '11',
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    categories: ['especial'],
    thumb: '/11-cubano.svg',
  },
  {
    id: '12',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    categories: ['especial'],
    thumb: '/12-havaiano.svg',
  },
  {
    id: '13',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    categories: ['especial'],
    thumb: '/13-arabe.svg',
  },
  {
    id: '14',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    categories: ['especial', 'alcólico'],
    thumb: '/14-irlandes.svg',
  },
]
export function ProductsContextProvider({
  children,
}: ProductsContextProviderProps) {
  const [products, setProducts] = useState(productList)

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
}
