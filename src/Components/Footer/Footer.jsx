import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <h2>Missionary Sisters of the Precious Blood Guesthouse</h2>
      <p>
        &copy; <span>{year}</span> Guesthouse - All Rights Copyright Reserved To{' '}
        <a
          target='_blank'
          rel='noreferrer'
          href='http://missionarysistersofpreciousbloodguesthouse.org/'
        >
          Missionary Sisters of the Precious Blood
        </a>
      </p>
    </footer>
  )
}
