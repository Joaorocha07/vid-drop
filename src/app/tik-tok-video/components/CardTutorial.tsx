import React from 'react'

import {
  steps,
  TitleTutorial,
  TutorialCard,
  TutorialContainer
} from './CartTutorialStyles'

import {
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'

import Image from 'next/image'

interface CardTutorialProps {
  text: string
}

export default function CardTutorial ({ text }: CardTutorialProps): JSX.Element {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <TutorialContainer>
        <TitleTutorial>
            {text}
        </TitleTutorial>
        {steps.map((step, index) => (
            <TutorialCard key={index}>
                <Image
                    src={step.imgBefore}
                    alt={`description-${index}-before`}
                    style={{
                      marginRight: '10px',
                      height: isMobile ? 50 : 80,
                      width: isMobile ? 50 : 80,
                      objectFit: 'cover'
                    }}
                />
                <Typography
                    style={{
                      width: isMobile ? '90%' : '60%',
                      wordWrap: 'break-word',
                      fontSize: isMobile ? '0.9rem' : '1.2rem',
                      textAlign: 'left'
                    }}
                >
                    {step.text}
                </Typography>
                <Image
                    src={step.imgAfter}
                    alt={`description-${index}-after`}
                    style={{
                      marginLeft: '10px',
                      height: isMobile ? 50 : 80,
                      width: isMobile ? 50 : 80,
                      objectFit: 'cover'
                    }}
                />
            </TutorialCard>
        ))}
    </TutorialContainer>
  )
}
