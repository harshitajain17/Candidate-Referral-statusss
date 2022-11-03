import React from 'react'
import Progressbar from './Progress_bar'
import './style.css'

const Table = ({ Data }) => {
  return (
    <table className="table table-striped">
      <tbody>
        <tr key={Data.id}>
          <td className="td1">{Data.candidate}<td className='title'>{Data.subtitle}</td></td>
          <td className="td2">
            <Progressbar
              bgcolor="#0ed746"
              progress={Math.max(
                Data.hired,
                Data.interviewed,
                Data.referred,
                Data.joined,
              )}
              height={30}
            />
          </td>
          <td className="td3">${Data.reward}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table
