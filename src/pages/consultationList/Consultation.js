import React from 'react'

export default function Consultation({match}) {
    let consultationId = match.params.id;
  return (
    <div className='consultation'>{consultationId}</div>
  )
}
