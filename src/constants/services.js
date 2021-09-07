import React from 'react'
import {
  GiCompass,
  GiDiamondHard,
  GiStabbedNote,
  GiBriefcase,
} from 'react-icons/gi'
const services = [
  {
    id: 1,
    icon: <GiCompass className="icon" />,
    label: 'mission',
    text:
      ' We make this possible by offering a wide range of well-designed, functional home furnishing products at process so low that as many people as possible will be able to afford them. ',
  },
  {
    id: 2,
    icon: <GiDiamondHard className="icon" />,
    label: 'vision',
    text:
      ' Our vision is to create a better everyday life for the many people.',
  },
  {
    id: 3,
    icon: <GiStabbedNote className="icon" />,
    label: 'history',
    text:
      'We’ve come a long way since our early days in Älmhult, Sweden, but we founder Ingvar Kamprad’s dream to create a better life for as many people as possible – whatever the size of their wallet – is and will always be our driving force.',
  },
  {
    id: 4,
    icon: <GiBriefcase className="icon" />,
    label: 'work',
    text: 'Our work is creating wonderful environment for our customers ',
  },
]
export default services
