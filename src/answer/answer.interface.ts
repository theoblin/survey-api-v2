import { IUserData } from "src/user/user.interface";

export interface IAnswerData {
    id: number;
    ip:string;
    questionsList:string;
    valid: boolean;
    createdDate: Date;
    lastUpdateDate: Date;
    survey:number;
  }
  
  export interface IAnswerRO {
    answer: IAnswerData;
  }