// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Stepper from '@mui/material/Stepper'
import { styled } from '@mui/material/styles'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import MuiStep from '@mui/material/Step'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import StepperCustomDot from './_formWizard/StepperCustomDot'

// ** Step Components

import AccountType from './_formWizard/AccountType'
import StepReview from './_formWizard/StepReview'
import AccountPermissions from './_formWizard/AccountPermissions'
import AccountDetails from './_formWizard/AccountDetails'

// ** Styled Components
import StepperWrapper from 'src/@core/styles/mui/stepper'

import { useAuth } from 'src/hooks/useAuth'
import { useForm } from 'react-hook-form'

const steps = [
  {
    title: 'Account Type',
    icon: 'mdi:tag-outline',
    subtitle: 'Choose type of account'
  },
  {
    title: 'Account Details',
    subtitle: 'User Details',
    icon: 'mdi:clipboard-text-outline'
  },
  {
    title: 'Role & Permissions',
    icon: 'mdi:credit-card-outline',
    subtitle: 'Control access permissions for this account'
  },
  {
    subtitle: 'Confirm account',
    title: 'Review & Complete',
    icon: 'mdi:rocket-launch-outline'
  }
]

const Step = styled(MuiStep)(({ theme }) => ({
  '&:not(:last-of-type)': {
    marginBottom: theme.spacing(4)
  },
  '& .MuiStepLabel-root': {
    padding: 0,
    cursor: 'pointer'
  }
}))

const StepperHeaderContainer = styled(CardContent)(({ theme }) => ({
  minWidth: 300,
  borderRight: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('md')]: {
    borderRight: 0,
    borderBottom: `1px solid ${theme.palette.divider}`
  }
}))

const CreateDealWizard = () => {
  const auth = useAuth()
  const { register, handleSubmit } = useForm()

  // ** States
  const [activeStep, setActiveStep] = useState(0)
  const [submitSuccess, setSubmitSuccess] = useState(null)

  const onSubmit = async data => {
    const response = await auth.requests.post('/api/auth/register', data)

    if (response.data.status === true) {
      setSubmitSuccess(true)
    }
  }

  // Handle Stepper
  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handlePrev = () => {
    if (activeStep !== 0) {
      setActiveStep(activeStep - 1)
    }
  }

  const getStepContent = step => {
    switch (step) {
      case 0:
        return <AccountType />
      case 1:
        return <AccountDetails registerController={register} />
      case 2:
        return <AccountPermissions />
      case 3:
        return <StepReview submitMessage={submitSuccess} />
      default:
        return null
    }
  }

  const renderContent = () => {
    return getStepContent(activeStep)
  }

  const renderFooter = () => {
    const stepCondition = activeStep === steps.length - 1
    return (
      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
        <Button
          color='secondary'
          variant='outlined'
          onClick={handlePrev}
          disabled={activeStep === 0}
          startIcon={<Icon icon='mdi:arrow-left' />}
        >
          Previous
        </Button>
        {stepCondition ? (
          <Button
            onClick={() => {
              handleSubmit(onSubmit)()
            }}
            type='button'
            variant='contained'
            color={stepCondition ? 'success' : 'primary'}
            {...(!stepCondition ? { endIcon: <Icon icon='mdi:arrow-right' /> } : {})}
          >
            Submit
          </Button>
        ) : (
          <Button
            type='button'
            variant='contained'
            color={stepCondition ? 'success' : 'primary'}
            {...(!stepCondition ? { endIcon: <Icon icon='mdi:arrow-right' /> } : {})}
            onClick={() => handleNext()}
          >
            Next
          </Button>
        )}
      </Box>
    )
  }

  return (
    <form>
      <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
        <StepperHeaderContainer>
          <StepperWrapper sx={{ height: '100%', '& .MuiStepLabel-label': { cursor: 'pointer' } }}>
            <Stepper connector={<></>} activeStep={activeStep} orientation='vertical'>
              {steps.map((step, index) => {
                return (
                  <Step
                    key={index}
                    onClick={() => setActiveStep(index)}
                    sx={{ '&.Mui-completed + svg': { color: 'primary.main' } }}
                  >
                    <StepLabel StepIconComponent={StepperCustomDot}>
                      <div className='step-label'>
                        <Typography className='step-number'>{`0${index + 1}`}</Typography>
                        <div>
                          <Typography className='step-title'>{step.title}</Typography>
                          <Typography className='step-subtitle'>{step.subtitle}</Typography>
                        </div>
                      </div>
                    </StepLabel>
                  </Step>
                )
              })}
            </Stepper>
          </StepperWrapper>
        </StepperHeaderContainer>
        <div style={{ flex: 1 }}>
          <CardContent>
            {renderContent()}
            {renderFooter()}
          </CardContent>
        </div>
      </Card>
    </form>
  )
}

export default CreateDealWizard
