import React from 'react'

export default function Class(props) {

    const {details} = props

    if (!details) {
        return <h3>Working fetching your class&apos;es details...</h3>
      }

    return (
        <div className=' class-container'>
            
            <div className='class-info'>
                <div className='card-title'>
                    <h2>{details.name}</h2>
                    <h3>{details.type}</h3>
                </div>
                <div className='class-description'>
                    <p>Start Time: {details.start_time}</p>
                    <p>Duration: {details.duration}</p>
                    <p>Difficulty: {details.intensity_level}</p>
                    <p>Location: {details.location}</p>
                    <p>Max Class Size: {details.max_class_size}</p>
                </div>
            </div>
            
        </div>
    )
}
