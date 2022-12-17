export interface Product {
  id: string
  name: string
  categories: string[]
  description: string
  price: number
  thumb: string
}

export const PAYMENT_TYPE = {
  CREDIT_CART: 'CREDIT_CART',
  DEBIT_CART: 'DEBIT_CART',
  MONEY: 'MONEY',
} as const

export type PaymentType = keyof typeof PAYMENT_TYPE

export interface ProductCart {
  id: string
  name: string
  categories: string[]
  description: string
  price: number
  thumb: string
  quantity: number
}

export interface Address {
  cep: string
  rua: string
  numero: string
  complemento?: string
  bairro: string
  cidade: string
  uf: string
}
