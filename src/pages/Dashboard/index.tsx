import React from 'react'
import { Title, Form, Repositories } from './styles'
import logoImg from '../../assets/logo.svg'
import { FiChevronRight } from 'react-icons/fi'

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer"/>
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório"/>
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars.githubusercontent.com/u/23344822?v=4" alt="Peterson Munuera"/>
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy higly scalable ReactJS and React Native forms !</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img src="https://avatars.githubusercontent.com/u/23344822?v=4" alt="Peterson Munuera"/>
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy higly scalable ReactJS and React Native forms !</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img src="https://avatars.githubusercontent.com/u/23344822?v=4" alt="Peterson Munuera"/>
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy higly scalable ReactJS and React Native forms !</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard