import appConfig from "../utils/AppConfig";
import axios from "axios";
import EmployeeModel from "../Components/Models/EmployeeModel/EmployeeModel";

class EmployeeService {
	public async getAll(): Promise<EmployeeModel[]>{
        const res = await axios.get<EmployeeModel[]>(appConfig.EmployeeUrl)
        const employees = res.data;
        return employees;
    }

    public async getOne(id: number): Promise<EmployeeModel>{
        const res = await axios.get<EmployeeModel>(appConfig.EmployeeUrl+"/"+id)
        const employee = res.data;
        return employee;
    }
}


const employeeService = new EmployeeService();

export default employeeService;