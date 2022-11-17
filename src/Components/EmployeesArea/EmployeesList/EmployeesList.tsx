import { useEffect, useState } from "react";
import employeeService from "../../../Services/EmployeeService";
import appConfig from "../../../utils/AppConfig";
import EmployeeModel from "../../Models/EmployeeModel/EmployeeModel";
import "./EmployeesList.css";

function EmployeesList(): JSX.Element {

    const [employeesList,setEmployeesList] = useState<EmployeeModel[]>([]);
    useEffect(()=>{
        employeeService.getAll()
        .then(employees => setEmployeesList(employees))
        .catch(err => console.log(err.message));
    },[])
    return (
        <div className="EmployeesList">
            <table>
                <tr> 
                    <th>id </th>
                    <th> FirstName </th>
                    <th>  LastName </th>
                    <th> Title </th>
                    <th> Country </th>
                    <th> City </th>
                    <th> BirthDate  </th>
                    <th> Picture </th>
                </tr> 
                <tbody>
				 {employeesList.map( employee =>
                     <tr> 
                        <th>{employee.id}</th>
                        <th>{employee.firstName}</th>
                        <th>{employee.lastName}</th>
                        <th>{employee.title}</th>
                        <th>{employee.country}</th>
                        <th>{employee.city}</th>
                        <th>{employee.birthDate}</th>
                        <th><img src={appConfig.EmployeeImageUrl+employee?.imageName}></img></th>
                  </tr>)}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeesList;
