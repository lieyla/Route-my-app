import React, {Component} from 'react'
import Elements from './Elements'
import './Elements.css'

class ListComponent extends Component{
    constructor(props){
    super(props);
    this.state={
        groups:[
            {
                fullName:"Joe Doe",
                adress:"W buckingham 223",
                seniority:"23 years",
                idnmber:"234343",
                maritialStatus:"single",
                birthDate:"11/23/1998",
                birthPlace:"Missisipi",
                eyeColor:"brown",
                height:"5.1feet",
                occupation:"Web Developer"
                },
               {fullName:"Richard Willson",
               adress:"W buckingham 223",
               seniority:"23 years",
               idnmber:"234343",
               maritialStatus:"single",
               birthDate:"11/23/1998",
               birthPlace:"Missisipi",
               eyeColor:"brown",
               height:"5.1feet",
               occupation:"Web Developer"
                  }, 
              { fullName:"Tereza Smith",
              adress:"W buckingham 223",
              seniority:"23 years",
              idnmber:"234343",
              maritialStatus:"single",
              birthDate:"11/23/1998",
              birthPlace:"Missisipi",
              eyeColor:"brown",
              height:"5.1feet",
              occupation:"Web Developer"},
            {
                fullName:"Harrison Chris",
            adress:"W buckingham 223",
            seniority:"23 years",
            idnmber:"234343",
            maritialStatus:"single",
            birthDate:"11/23/1998",
            birthPlace:"Missisipi",
            eyeColor:"brown",
            height:"5.1feet",
            occupation:"Web Developer"},
                    
           {
            fullName:"Owen Hary",
           adress:"W buckingham 223",
           seniority:"23 years",
           idnmber:"234343",
           maritialStatus:"single",
           birthDate:"11/23/1998",
           birthPlace:"Missisipi",
           eyeColor:"brown",
           height:"5.1feet",
           occupation:"Web Developer"},      
                    
                 
                ]
    }

    }

render(){

    


    return(

        <div className="Elements">
            <table>
                <tr>
<th>fullName </th>
<th>adress </th>
<th>seniority </th>
<th>id</th>
<th>maritialStatus</th>
<th>birthDate</th>
<th>birthPlace</th>
<th>eyeColor</th>
<th>weight </th>
<th>occupation </th>
                </tr>

            
           
            </table>
                </div>
        
        )
}

}
export default ListComponent;
