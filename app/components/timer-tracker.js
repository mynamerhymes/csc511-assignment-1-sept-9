import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class TimerTrackerComponent extends Component {
    @tracked hour = null;
    @tracked min = null;
    @tracked sec = null;
    @tracked ms = null;
    @tracked day = null;
    @tracked month = null;
    @tracked year = null;
    @tracked hourForeign = null;
    @tracked timeZone = 6;

    textDisplayCurrent = 'Current Time New York, United States';
    textDisplayForeign = 'Current Time Berlin, Germany';

    constructor(){ 
        super(...arguments);
        this.setTimeDate();
        this.setTimeForeign();

    }
    setTimeDate(){
        var t = new Date();
        this.month = t.getMonth() + 1;
        this.day = t.getDate();
        this.year = t.getFullYear();

        this.hour = t.getHours();
        if(this.hour > 12){ // Get 12 Hour clock
            this.hour = this.hour - 12;
        }
        if(this.hour == 0){
            this.hour = 12;
        }
        
        this.min = t.getMinutes();
        if(this.min < 10){ // 0 infront of minutes if less than 10
            this.min = "0"+ this.min;
        }
        this.sec = t.getSeconds();
        if(this.sec < 10){ // 0 infront of seconds if less than 10
            this.sec = "0"+ this.sec;
        }
        this.ms = t.getMilliseconds();

    }
    setTimeForeign(){
        this.hourForeign = this.hour + this.timeZone; // gets timeZone difference
        if(this.hourForeign > 12){ // Get 12 Hour clock
            this.hourForeign = this.hourForeign - 12;
        }
    }
    refreshTime(){
        this.setTimeDate();
        this.setTimeForeign();
    }

    
    
}
