/* eslint-disable react/no-children-prop */
'use client'
import {
  Card,
  CardHeader,
  AbsoluteCenter,
  InputGroup,
  Input,
  InputRightElement,
  CardBody,
  FormControl,
  Button,
  FormErrorMessage,
  useBoolean,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
  Switch,
} from '@chakra-ui/react'
import { SettingsIcon, LockIcon, UnlockIcon } from '@chakra-ui/icons'
import { Field, Form, Formik } from 'formik'
import { useState } from 'react'

type Props = { account: string; tokenList: any }

const Exchange: React.FC<Props> = ({ account, tokenList }) => {
  const [isSetting, setIsSetting] = useBoolean(false)
  const [tolerance, setTolerance] = useState({ value: 0.01, enabled: false })
  const [waitingTime, setWaitingTime] = useState({ value: 30, enabled: false })
  const [hasDeadline, setHasDeadline] = useBoolean(false)
  function validate(value: any) {
    let error
    if (!value) {
      error = 'it is required'
    }
    return error
  }
  const renderForm = () => (
    <Formik
      initialValues={{ from: '', to: '' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2))
          console.log(values)
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {props => (
        <Form>
          <div className='my-8'>
            <Field name='from' validate={validate}>
              {({ field, form }: any) => {
                return (
                  <FormControl isInvalid={form.errors.from && form.touched.from}>
                    <InputGroup>
                      <Input
                        {...field}
                        color='tomato'
                        placeholder='from'
                        _placeholder={{ opacity: 0.4, color: 'inherit' }}
                      />
                      <InputRightElement>
                        <SettingsIcon />
                      </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>{form.errors.from}</FormErrorMessage>
                  </FormControl>
                )
              }}
            </Field>
          </div>
          <div className='my-8'>
            <Field name='to' validate={validate}>
              {({ field, form }: any) => (
                <FormControl isInvalid={form.errors.to && form.touched.to}>
                  <InputGroup>
                    <Input
                      {...field}
                      color='tomato'
                      placeholder='to'
                      _placeholder={{ opacity: 0.4, color: 'inherit' }}
                    />
                    <InputRightElement>
                      <SettingsIcon />
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{form.errors.to}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
          </div>
          <div className='my-8'>
            <Button
              isDisabled={account === ''}
              mt={4}
              colorScheme='pink'
              variant='outline'
              type='submit'
              isLoading={props.isSubmitting}
              className={`w-full ${account !== '' && 'hover:bg-slate-400 hover:text-teal-50'}`}
            >
              {account !== '' ? 'Submit' : 'Not Connected'}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
  const renderSetting = () => (
    <>
      <div className='flex flex-row items-center my-4'>
        <span className='mr-4'>Slippage tolerance</span>
        {tolerance.enabled ? (
          <UnlockIcon
            className='hover:text-rose-500 cursor-pointer'
            onClick={() => setTolerance({ ...tolerance, enabled: !tolerance.enabled })}
          />
        ) : (
          <LockIcon
            className='hover:text-rose-500 cursor-pointer'
            onClick={() => setTolerance({ ...tolerance, enabled: !tolerance.enabled })}
          />
        )}
      </div>
      <div className='flex flex-row items-center justify-between my-4'>
        <Button
          size={'md'}
          colorScheme='pink'
          variant='outline'
          className={`mr-4 ${tolerance.enabled && 'hover:bg-slate-400 hover:text-teal-50'}`}
          isDisabled={!tolerance.enabled}
        >
          Auto
        </Button>
        <NumberInput
          className='flex-1'
          isDisabled={!tolerance.enabled}
          step={0.01}
          min={0.01}
          max={1.0}
          value={tolerance.value}
          onChange={val => {
            setTolerance({ ...tolerance, value: Number(val) })
          }}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper bg='green.200' _active={{ bg: 'pink.300' }} children='+' />
            <NumberDecrementStepper bg='green.200' _active={{ bg: 'pink.300' }} children='-' />
          </NumberInputStepper>
        </NumberInput>
      </div>
      <div className='flex flex-row items-center my-4'>
        <span className='mr-4'>Waiting time</span>
        {waitingTime.enabled ? (
          <UnlockIcon
            className='hover:text-rose-500 cursor-pointer'
            onClick={() => setWaitingTime({ ...waitingTime, enabled: !waitingTime.enabled })}
          />
        ) : (
          <LockIcon
            className='hover:text-rose-500 cursor-pointer'
            onClick={() => setWaitingTime({ ...waitingTime, enabled: !waitingTime.enabled })}
          />
        )}
      </div>
      <div className='flex flex-row items-center  justify-between my-4'>
        <Input
          isDisabled={!waitingTime.enabled}
          value={waitingTime.value}
          onChange={val => {
            setWaitingTime({ ...waitingTime, value: Number(val) })
          }}
        />
        <Button
          size={'md'}
          colorScheme='pink'
          variant='outline'
          className={`ml-4 ${waitingTime.enabled && 'hover:bg-slate-400 hover:text-teal-50'}`}
          isDisabled={!waitingTime.enabled}
        >
          Minutes
        </Button>
      </div>
      <div className='flex flex-row items-center my-4 justify-between'>
        <span>Transaction deadline</span>
        <Switch size='lg' isChecked={hasDeadline} onChange={setHasDeadline.toggle} colorScheme='pink' />
      </div>
    </>
  )
  return (
    <>
      <AbsoluteCenter h='40px' color='white' axis='both' className='w-5/12 mt-48'>
        <Card width={'100%'} bg={'#20252f'} color={'white'}>
          <CardHeader>
            <div className='flex flex-rows items-center justify-between'>
              <div className='font-bold'>{isSetting ? 'Setting' : 'Swap'}</div>
              <SettingsIcon className=' cursor-pointer hover:text-rose-400' onClick={setIsSetting.toggle} />
            </div>
          </CardHeader>
          <CardBody>{isSetting ? renderSetting() : renderForm()}</CardBody>
        </Card>
      </AbsoluteCenter>
    </>
  )
}

export default Exchange
