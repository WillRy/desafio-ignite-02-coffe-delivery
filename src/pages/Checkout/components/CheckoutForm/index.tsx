import axios from 'axios'
import { MapPin, MapPinLine } from 'phosphor-react'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { BaseInput } from '../../../../components/BaseInput'
import {
  BoxContent,
  BoxSubTitle,
  BoxTitle,
  FormCheckout,
  Subtitle,
} from './styles'

export function CheckoutForm() {
  const [loadingCep, setLoadingCep] = useState(false)
  const {
    register,
    formState: { errors },
    getValues,
    setValue,
    trigger,
  } = useFormContext()

  function handleCepBlur() {
    const cep = getValues('cep').replace(/[^0-9]/g, '')

    if (cep.length !== 8) return false

    setLoadingCep(true)
    axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((r) => {
        const dados = r.data
        setValue('bairro', dados.bairro)
        setValue('uf', dados.uf)
        setValue('rua', dados.logradouro)
        setValue('cidade', dados.localidade)
        trigger()
      })
      .finally(() => {
        setLoadingCep(false)
      })
  }

  return (
    <div>
      <Subtitle>Complete seu pedido</Subtitle>
      <BoxContent>
        <BoxTitle>
          <MapPinLine size={22} weight="light" />
          Endereço de entrega
        </BoxTitle>
        <BoxSubTitle>
          Informe o endereço onde deseja receber seu pedido
        </BoxSubTitle>
        <FormCheckout>
          <div className="w-full">
            <div className="w-241">
              <BaseInput
                id="cep"
                placeholder="CEP"
                {...register('cep')}
                error={errors.cep?.message?.toString()}
                onBlur={handleCepBlur}
              />
            </div>
          </div>

          <div className="w-full">
            <div className="w-auto">
              <BaseInput
                id="rua"
                placeholder="Rua"
                {...register('rua')}
                error={errors.rua?.message?.toString()}
                disabled={loadingCep}
              />
            </div>
          </div>

          <div className="w-full">
            <div className="w-241">
              <BaseInput
                id="numero"
                placeholder="Número"
                {...register('numero')}
                error={errors.numero?.message?.toString()}
              />
            </div>
            <div className="w-auto">
              <BaseInput
                id="complemento"
                placeholder="Complemento"
                {...register('complemento')}
                error={errors.complemento?.message?.toString()}
                altPlaceholder={'Opcional'}
              />
            </div>
          </div>

          <div className="w-full">
            <div className="w-241">
              <BaseInput
                id="bairro"
                placeholder="Bairro"
                {...register('bairro')}
                error={errors.bairro?.message?.toString()}
                disabled={loadingCep}
              />
            </div>

            <div className="w-auto">
              <BaseInput
                id="cidade"
                placeholder="Cidade"
                {...register('cidade')}
                error={errors.cidade?.message?.toString()}
                disabled={loadingCep}
              />
            </div>
            <div className="w-60">
              <BaseInput
                id="uf"
                placeholder="UF"
                {...register('uf')}
                error={errors.uf?.message?.toString()}
                disabled={loadingCep}
              />
            </div>
          </div>
        </FormCheckout>
      </BoxContent>
    </div>
  )
}
