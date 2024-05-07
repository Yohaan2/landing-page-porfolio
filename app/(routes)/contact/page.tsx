import ContainerPage from '@/components/container'
import FormContact from '@/components/formContact'
import TransitionPage from '@/components/transitionPage'
import React from 'react'

const ContactPage = () => {
  return (
    <>
    <TransitionPage />
    <ContainerPage>
        <FormContact />
    </ContainerPage>
    </>
  )
}

export default ContactPage
