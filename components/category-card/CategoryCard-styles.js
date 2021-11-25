import styled from 'styled-components'

export const Section = styled.section``

export const Heading = styled.h2`
  text-align: center;
`

//lo ma lo ma ti tay
export const Frame = styled.section`
  margin-top: 5em;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50%;
    background-color: ${({ theme }) => theme.colors.heading};
    border-radius: 0.63em;
    z-index: -1;
  }
`

export const ImageWrapper = styled.div`
  width: 80%;
  aspect-ratio: 1;
  position: relative;
  border-radius: 0.63em;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.greenBoxShadow};
  margin-bottom: 1.2em;
`

export const ContentWrapper = styled.div`
  width: 20em;
  padding-bottom: 1.2em;
`

export const CategoryName = styled.h3`
  color: ${({ theme }) => theme.colors.bodyBg};
  text-align: center;
  font-size: 1.56em;
`