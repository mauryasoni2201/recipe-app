import RequestParams from "@/models/RequestParams";

export const sendRequest=async({url,configuration}:RequestParams)=>{
    try{
        const response = await fetch(url,configuration);
        const data = await response.json();
        if(!response.ok){
            throw new Error(`${data.message}`);
        }else{
            return {statusCode:response.status,data};
        }
    }catch(error){
        throw new Error(`${error}`);
    }
}

export const getAllData=async(url:string,configuration?:RequestInit)=>{
    try{
        const response = await fetch(url,configuration);
        const data =  await response.json();
        if(!response.ok){
            throw new Error(`${data.message}`);
        }
        return data;
    }catch(error){
            throw new Error(`${error}`);
    }
}
