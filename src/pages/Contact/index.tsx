import { useState } from 'react'

import './index.scss'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault()
    alert('teste')
  }

  return (
    <div className="container-form">
      <h1>Formulário de Contato</h1>
      <form
        className="form"
        onSubmit={() => {
          sendEmail
        }}
      >
        <input
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <textarea
          className="input"
          type="text"
          placeholder="Digite sua mensagem"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <input className="button" type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default Contact
