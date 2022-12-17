import { useState, useContext } from 'react'
import { PaymentType } from '../../@types/global'
import { Container } from '../../components/Container'
import { CartContext } from '../../context/CartContext'
import { CheckoutActions } from './components/CheckoutActions'
import { CheckoutForm } from './components/CheckoutForm'
import { CheckoutPaymentType } from './components/CheckoutPaymentType'
import {
  CheckoutAction,
  CheckoutContainer,
  CheckoutInformation,
} from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const checkoutFormValidation = zod.object({
  cep: zod.string().min(1, 'O cep é obrigatório'),
  rua: zod.string().min(1, 'A rua é obrigatório'),
  numero: zod.string().min(1, 'O número é obrigatório'),
  complemento: zod.string().max(50),
  bairro: zod.string().min(1, 'O bairro é obrigatório'),
  cidade: zod.string().min(1, 'A cidade é obrigatório'),
  uf: zod.string().min(2, 'A UF é obrigatório'),
})
type checkoutFormData = zod.infer<typeof checkoutFormValidation>

export function Checkout() {
  const { finishCheckout } = useContext(CartContext)
  const [paymentType, setPaymentType] = useState<PaymentType | undefined>()
  const navigate = useNavigate()

  function handlePaymentTypeChange(type: PaymentType) {
    setPaymentType(type)
  }

  const form = useForm<checkoutFormData>({
    resolver: zodResolver(checkoutFormValidation),
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
    },
  })

  const { handleSubmit } = form

  function onSubmit(data: checkoutFormData) {
    if (!paymentType) {
      return toast('Informe o método de pagamento!', { type: 'error' })
    }
    finishCheckout(data, paymentType)
    navigate('/confirmacao')
  }

  console.log(paymentType)
  return (
    <Container hasSpaceTop={true}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CheckoutContainer>
          <CheckoutInformation>
            <FormProvider {...form}>
              <CheckoutForm />
            </FormProvider>
            <CheckoutPaymentType
              onChange={handlePaymentTypeChange}
              active={paymentType}
            />
          </CheckoutInformation>
          <CheckoutAction>
            <CheckoutActions />
          </CheckoutAction>
        </CheckoutContainer>
      </form>
    </Container>
  )
}
