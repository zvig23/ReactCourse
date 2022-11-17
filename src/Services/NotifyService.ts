import {Notyf} from "notyf";
class NotifyService{
    private notyf = new Notyf({
        duration:2500,
        dismissible: false,
        
            })
    public success(msg:string){
        this.notyf.success(msg)
    }
    public error(err: any ){
        this.getError(err)
    }

    private getError(err: any) {
        
        if (typeof err === "string") return err;
        if (typeof err.response?.data === "string") return err.response?.data;
        if (Array.isArray(err.response?.data) ) return err.response?.data[0];
        if (typeof err.message === "string") return err.message;
        
        return "fucked up anyway";

        }



}

const notifyService = new NotifyService();
export default notifyService;