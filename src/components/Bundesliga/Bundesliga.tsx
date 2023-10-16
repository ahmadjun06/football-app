import React from 'react'
import { Football } from '../Football/Football'
import { LiveResult } from '../../pages/LiveResult/LiveResult'

export const Bundesliga =()=> {
    return (
      <div>
         <Football/>
        <LiveResult/>
        <p>
            Bundesliga
        </p>
      </div>
    )
}
