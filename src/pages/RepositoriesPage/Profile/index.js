import React from 'react'
import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md'
import { Container, Header, Avatar, Login, Name, Inner, Data} from './styles'

const Profile = () =>

   (
    <Container>
      <Header>
        <Avatar src="https://github.com/athospugliese.png"/>
        <Login>athospugliese</Login>
        <Name>Athos Pugliese</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20}/>
          30&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;10&nbsp;<i>seguindo</i>
        </Data>
        <Data>
        <MdWork size={20}/>
          Embrapa
        </Data>
        <Data>
        <MdLocationCity size={20}/>
          Recife, Pernambuco
        </Data>
        <Data>
        <MdLink size={20}/>
          <a href='embrapa.org.br'>
              embrapa.org.br
          </a>
        </Data>
      </Inner>
    </Container>
  )


export default Profile