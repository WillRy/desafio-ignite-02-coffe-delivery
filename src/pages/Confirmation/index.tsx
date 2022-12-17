import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PAYMENT_TYPE } from '../../@types/global'
import { Container } from '../../components/Container'
import { RoundIcon } from '../../components/RoundIcon'
import { CartContext } from '../../context/CartContext'
import {
  ConfirmationContainer,
  ConfirmationDetail,
  ConfirmationItem,
  ConfirmationSubTitle,
  ConfirmationThumb,
  ConfirmationTitle,
} from './styles'

export function Confirmation() {
  const { address, paymentType } = useContext(CartContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!address || !paymentType) {
      navigate('/')
    }
  }, [address, paymentType, navigate])

  return (
    <Container hasSpaceTop={true}>
      <ConfirmationTitle>Uhu! Pedido confirmado</ConfirmationTitle>
      <ConfirmationSubTitle>
        Agora é só aguardar que logo o café chegará até você
      </ConfirmationSubTitle>

      <ConfirmationContainer>
        <ConfirmationDetail>
          <ConfirmationItem>
            <RoundIcon variantColor="purple">
              <MapPin size={16} weight="fill" />
            </RoundIcon>
            <div>
              <p>
                Entrega em &nbsp;
                <strong>
                  {address?.rua}, {address?.numero}
                </strong>
              </p>
              <p>
                {address?.bairro} - {address?.cidade}, {address?.uf}
              </p>
            </div>
          </ConfirmationItem>

          <ConfirmationItem>
            <RoundIcon variantColor="yellow">
              <Clock size={16} weight="fill" />
            </RoundIcon>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min </strong>
              </p>
            </div>
          </ConfirmationItem>

          <ConfirmationItem>
            <RoundIcon variantColor="yellowDark">
              <CurrencyDollar size={16} weight="fill" />
            </RoundIcon>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                {paymentType === PAYMENT_TYPE.CREDIT_CART && (
                  <strong>Cartão de Crédito</strong>
                )}
                {paymentType === PAYMENT_TYPE.DEBIT_CART && (
                  <strong>Cartão de Débito</strong>
                )}
                {paymentType === PAYMENT_TYPE.MONEY && (
                  <strong>Dinheiro</strong>
                )}
              </p>
            </div>
          </ConfirmationItem>
        </ConfirmationDetail>
        <ConfirmationThumb>
          <img src="/confirmation.svg" alt="Confirmação de entrega" />
        </ConfirmationThumb>
      </ConfirmationContainer>
    </Container>
  )
}
