import styled, { css } from 'styled-components/macro'
import { CommonStyleProps } from './types'

const CommonStyles = css<CommonStyleProps>`
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  min-width: ${({ minWidth }) => minWidth || 'auto'};
  min-height: ${({ minHeight }) => minHeight || 'auto'};
  max-width: ${({ maxWidth }) => maxWidth || 'auto'};
  max-height: ${({ maxHeight }) => maxHeight || 'auto'};
  border: ${({ border }) => (border ? '1px solid rgba(134, 117, 79)' : '')};
  border-radius: ${({ radius }) => radius || ''};
  font-size: ${({ fontSize }) => fontSize || '22px'};
  overflow: ${({ overflow }) => overflow || ''};
`

const DFlex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FullScreenContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  ${DFlex}
`

export const FlexRowCenter = styled.div<
  CommonStyleProps & { flexDirection?: string }
>`
  width: 100%;
  height: 100%;
  ${CommonStyles};
  ${DFlex}
  @media (max-width:585px) {
    flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  }
`

export const FlexColumnCenter = styled.div<CommonStyleProps>`
  ${CommonStyles};
  ${DFlex}
  flex-direction: column;
`

export const H1 = styled.h1<CommonStyleProps>`
  ${CommonStyles}
  text-align: center;
`

export const Span = styled.span<CommonStyleProps>`
  ${CommonStyles}
  display: inline-block;
`

export const Div = styled.div<CommonStyleProps>`
  ${CommonStyles};
`
