import React from 'react'

function Elements(props){

    return(
        <div>
  
  <tr>
<td>{props.fullName} </td>
<td>{props.adrress} </td>
<td>{props.seniority} </td>
<td>{props.id} </td>
<td>{props.maritialStatus} </td>
<td>{props.birthDate} </td>
<td>{props.birthPlace}</td>
<td>{props.eyeColor} </td>
<td>{props.weight} </td>
<td>{props.occupation} </td>
  
</tr>
        </div>
    )
}export default Elements;

