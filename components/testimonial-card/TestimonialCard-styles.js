import styled from 'styled-components'

export const Section = styled.section`
  padding-top: 6.25em;
`

export const Heading = styled.h2`
  text-align: center;
`

export const Frame = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 5em;

  //update
  min-width: min-content;
  padding-right: 7.81em;

  @media screen and (max-width: 980px) {
    padding-right: 3.91em;
  }

  @media screen and (max-width: 500px) {
    padding-right: 1.251em;
  }
`

//update
export const OverflowAera = styled.div`
  padding: 0 7.81em 6.25em;
  overflow-x: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  @media screen and (max-width: 980px) {
    padding: 0 3.19em 6.25em;
  }

  @media screen and (max-width: 500px) {
    padding: 0 1.25em 6.25em;
  }
`

export const Item = styled.div`
  background-color: ${({ theme }) => theme.colors.offWhite};
  border-radius: 1.25em;
  position: relative;
  margin-top: 1.72em;
  display: flex;
  flex-direction: column;

  //update
  width: 26em;

  @media screen and (max-width: 500px) {
    width: 24em;
  }
`

export const Text = styled.p`
  text-align: center;
  padding: 3em 1.2em 2em 1.2em;
`

export const InfoWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.testimonial};
  border-radius: 0 0 1.25em 1.25em;
  display: flex;
  margin-top: auto;
`

export const Info = styled.div`
  flex: 1;
  text-align: center;
  padding: 1.56em 0.63em;
`

export const InfoText = styled.p`
  font-size: 1.09em;
`

export const Icon = styled.img`
  position: absolute;
  top: -1.72em;
  left: 1.88em;
  width: 3.44em;
  height: 3.16em;
`
