import { isJSDocLinkLike } from "typescript";

class AppConfig{
    public prodUrl = "";
    public prodImageUrl = "";
    public EmployeeUrl = "";
    public EmployeeImageUrl = "";
    public loginUrl=""
    public registerUrl=""

}

class DevConfig extends AppConfig{
    public prodUrl = "http://localhost:3030/api/products/";
    public prodImageUrl = "http://localhost:3030/api/products/images/";
    public EmployeeUrl = "http://localhost:3030/api/employees";
    public EmployeeImageUrl = "http://localhost:3030/api/employees/images/";
    public loginUrl="http://localhost:3030/api/auth/login/";
    public registerUrl="http://localhost:3030/api/auth/register"

}

class ProdConfig extends AppConfig{
    public prodUrl = "http://localhost:3030/api/products/";
    public prodImageUrl = "http://localhost:3030/api/products/images/";
    public EmployeeUrl = "http://localhost:3030/api/employees";
    public EmployeeImageUrl = "http://localhost:3030/api/employees/images/";
    public loginUrl="http://localhost:3030/api/auth/login/";
    public registerUrl="http://localhost:3030/api/auth/register"

}

const appConfig = process.env.NODE_ENV === "development" ? new DevConfig() : new ProdConfig();
export default appConfig;