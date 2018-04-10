import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UserService {

    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];


    constructor(private counterService:CounterService){

    }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.setActiveToInactiveCounter();
    console.log(this.counterService.activeToInactiveCounter);
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.setInactiveToActiveCounter();
  }

  getActiveUsers(){
    return this.activeUsers;
  }

  getInactiveUsers(){
    return this.inactiveUsers;
  }

}