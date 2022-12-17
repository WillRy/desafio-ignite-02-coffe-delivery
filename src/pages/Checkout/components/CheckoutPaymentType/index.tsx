import {
  BoxContent,
  BoxSubTitle,
  BoxTitle,
  TypeButton,
  TypeContainer,
} from './styles'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { PaymentType, PAYMENT_TYPE } from '../../../../@types/global'

interface CheckoutPaymentTypeProps {
  active?: PaymentType
  onChange: (type: PaymentType) => void
}
export function CheckoutPaymentType({
  onChange,
  active,
}: CheckoutPaymentTypeProps) {
  function handleChange(type: PaymentType) {
    onChange(type)
  }

  return (
    <div>
      <BoxContent>
        <BoxTitle>
          <CurrencyDollar size={22} weight="light" />
          Pagamento
        </BoxTitle>
        <BoxSubTitle>
          O pagamento é feito na entrega. Escolha a forma que deseja pagar
        </BoxSubTitle>
        <TypeContainer>
          <TypeButton
            type="button"
            active={active === PAYMENT_TYPE.CREDIT_CART}
            onClick={() => handleChange(PAYMENT_TYPE.CREDIT_CART)}
          >
            <CreditCard size={22} weight="light" />
            Cartão de crédito
          </TypeButton>

          <TypeButton
            type="button"
            active={active === PAYMENT_TYPE.DEBIT_CART}
            onClick={() => handleChange(PAYMENT_TYPE.DEBIT_CART)}
          >
            <Bank size={22} weight="light" />
            Cartão de débito
          </TypeButton>

          <TypeButton
            type="button"
            active={active === PAYMENT_TYPE.MONEY}
            onClick={() => handleChange(PAYMENT_TYPE.MONEY)}
          >
            <Money size={22} weight="light" />
            Dinheiro
          </TypeButton>
        </TypeContainer>
      </BoxContent>
    </div>
  )
}
