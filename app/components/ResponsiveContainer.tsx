'use client'
import { ReactNode } from 'react'

interface ResponsiveContainerProps {
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

const sizeClasses = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl', 
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-full'
}

const paddingClasses = {
  none: '',
  sm: 'px-4 sm:px-6',
  md: 'px-4 sm:px-6 lg:px-8',
  lg: 'px-6 sm:px-8 lg:px-12',
  xl: 'px-8 sm:px-12 lg:px-16'
}

export default function ResponsiveContainer({ 
  children, 
  className = '', 
  size = 'xl',
  padding = 'md'
}: ResponsiveContainerProps) {
  return (
    <div className={`${sizeClasses[size]} mx-auto ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  )
}

// Responsive Grid Component
interface ResponsiveGridProps {
  children: ReactNode
  className?: string
  cols?: {
    default: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
  gap?: 'sm' | 'md' | 'lg' | 'xl'
}

const gapClasses = {
  sm: 'gap-3 sm:gap-4',
  md: 'gap-4 sm:gap-6',
  lg: 'gap-6 sm:gap-8',
  xl: 'gap-8 sm:gap-12'
}

export function ResponsiveGrid({ 
  children, 
  className = '', 
  cols = { default: 1, sm: 2, lg: 3 },
  gap = 'md'
}: ResponsiveGridProps) {
  const gridCols = `grid-cols-${cols.default} ${
    cols.sm ? `sm:grid-cols-${cols.sm}` : ''
  } ${
    cols.md ? `md:grid-cols-${cols.md}` : ''
  } ${
    cols.lg ? `lg:grid-cols-${cols.lg}` : ''
  } ${
    cols.xl ? `xl:grid-cols-${cols.xl}` : ''
  }`

  return (
    <div className={`grid ${gridCols} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  )
}

// Responsive Text Component
interface ResponsiveTextProps {
  children: ReactNode
  className?: string
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  color?: 'white' | 'gray' | 'cyan' | 'gradient'
}

const textSizeClasses = {
  xs: 'text-fluid-xs',
  sm: 'text-fluid-sm', 
  base: 'text-fluid-base',
  lg: 'text-fluid-lg',
  xl: 'text-fluid-xl',
  '2xl': 'text-fluid-2xl',
  '3xl': 'text-fluid-3xl',
  '4xl': 'text-fluid-4xl',
  '5xl': 'text-fluid-5xl',
  '6xl': 'text-fluid-6xl'
}

const textWeightClasses = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold'
}

const textColorClasses = {
  white: 'text-white',
  gray: 'text-gray-300',
  cyan: 'text-cyan-glow',
  gradient: 'bg-gradient-to-r from-electric-cyan to-royal-blue bg-clip-text text-transparent'
}

export function ResponsiveText({ 
  children, 
  className = '', 
  size = 'base',
  weight = 'normal',
  color = 'white'
}: ResponsiveTextProps) {
  return (
    <span className={`${textSizeClasses[size]} ${textWeightClasses[weight]} ${textColorClasses[color]} ${className}`}>
      {children}
    </span>
  )
}

// Responsive Spacing Component
interface ResponsiveSpacingProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  direction?: 'top' | 'bottom' | 'vertical' | 'horizontal' | 'all'
  type?: 'margin' | 'padding'
}

const spacingClasses = {
  margin: {
    xs: { 
      top: 'mt-2 sm:mt-3',
      bottom: 'mb-2 sm:mb-3', 
      vertical: 'my-2 sm:my-3',
      horizontal: 'mx-2 sm:mx-3',
      all: 'm-2 sm:m-3'
    },
    sm: {
      top: 'mt-4 sm:mt-6',
      bottom: 'mb-4 sm:mb-6',
      vertical: 'my-4 sm:my-6', 
      horizontal: 'mx-4 sm:mx-6',
      all: 'm-4 sm:m-6'
    },
    md: {
      top: 'mt-6 sm:mt-8 lg:mt-12',
      bottom: 'mb-6 sm:mb-8 lg:mb-12',
      vertical: 'my-6 sm:my-8 lg:my-12',
      horizontal: 'mx-6 sm:mx-8 lg:mx-12', 
      all: 'm-6 sm:m-8 lg:m-12'
    },
    lg: {
      top: 'mt-8 sm:mt-12 lg:mt-16',
      bottom: 'mb-8 sm:mb-12 lg:mb-16',
      vertical: 'my-8 sm:my-12 lg:my-16',
      horizontal: 'mx-8 sm:mx-12 lg:mx-16',
      all: 'm-8 sm:m-12 lg:m-16'
    },
    xl: {
      top: 'mt-12 sm:mt-16 lg:mt-20',
      bottom: 'mb-12 sm:mb-16 lg:mb-20',
      vertical: 'my-12 sm:my-16 lg:my-20',
      horizontal: 'mx-12 sm:mx-16 lg:mx-20',
      all: 'm-12 sm:m-16 lg:m-20'
    },
    '2xl': {
      top: 'mt-16 sm:mt-20 lg:mt-24',
      bottom: 'mb-16 sm:mb-20 lg:mb-24',
      vertical: 'my-16 sm:my-20 lg:my-24',
      horizontal: 'mx-16 sm:mx-20 lg:mx-24',
      all: 'm-16 sm:m-20 lg:m-24'
    }
  },
  padding: {
    xs: {
      top: 'pt-2 sm:pt-3',
      bottom: 'pb-2 sm:pb-3',
      vertical: 'py-2 sm:py-3',
      horizontal: 'px-2 sm:px-3',
      all: 'p-2 sm:p-3'
    },
    sm: {
      top: 'pt-4 sm:pt-6',
      bottom: 'pb-4 sm:pb-6',
      vertical: 'py-4 sm:py-6',
      horizontal: 'px-4 sm:px-6',
      all: 'p-4 sm:p-6'
    },
    md: {
      top: 'pt-6 sm:pt-8 lg:pt-12',
      bottom: 'pb-6 sm:pb-8 lg:pb-12',
      vertical: 'py-6 sm:py-8 lg:py-12',
      horizontal: 'px-6 sm:px-8 lg:px-12',
      all: 'p-6 sm:p-8 lg:p-12'
    },
    lg: {
      top: 'pt-8 sm:pt-12 lg:pt-16',
      bottom: 'pb-8 sm:pb-12 lg:pb-16',
      vertical: 'py-8 sm:py-12 lg:py-16',
      horizontal: 'px-8 sm:px-12 lg:px-16',
      all: 'p-8 sm:p-12 lg:p-16'
    },
    xl: {
      top: 'pt-12 sm:pt-16 lg:pt-20',
      bottom: 'pb-12 sm:pb-16 lg:pb-20',
      vertical: 'py-12 sm:py-16 lg:py-20',
      horizontal: 'px-12 sm:px-16 lg:px-20',
      all: 'p-12 sm:p-16 lg:p-20'
    },
    '2xl': {
      top: 'pt-16 sm:pt-20 lg:pt-24',
      bottom: 'pb-16 sm:pb-20 lg:pb-24',
      vertical: 'py-16 sm:py-20 lg:py-24',
      horizontal: 'px-16 sm:px-20 lg:px-24',
      all: 'p-16 sm:p-20 lg:p-24'
    }
  }
}

export function ResponsiveSpacing({ 
  size = 'md', 
  direction = 'all', 
  type = 'margin' 
}: ResponsiveSpacingProps) {
  const className = spacingClasses[type][size][direction]
  return <div className={className} />
}