import { EventEmitter } from '@angular/core';

export class CounterService{

    activeToInactiveCounter=0;
    inactiveToActiveCounter=0;

    activeCountUpdate = new EventEmitter();

    setActiveToInactiveCounter(){
 
        this.activeToInactiveCounter++;
        this.activeCountUpdate.emit();
     
    }

    setInactiveToActiveCounter(){
        this.inactiveToActiveCounter++;
        this.activeCountUpdate.emit();
    }
}