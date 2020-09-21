import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

class DateTime {
    @tracked hour;
    @tracked min;
    @tracked second;
    @tracked millisec;
    @tracked month;
    @tracked day;
    @tracked year;

    constructor(){
        this.hour = null;
        this.min = null;
        this.second = null;
        this.millisec = null;
        this.month = null;
        this.day = null;
        this.year = null;
    }
}

export default class TimerTrackerComponent extends Component {
    current = new DateTime();
    moscowRussia = new DateTime();

    get setTimeDate(){
        try {
            this.setCurrentTimeDate();
            this.setOtherTimeDate(this.moscowRussia, 3);
            setInterval(this.refreshTime, 1000);
            return 1;
        } catch (error) {
            console.log('Error: Cannot Get Time');
            console.error(error);
            alert('Error: Cannot Get Time');
            return 0;
        }
    };

    setCurrentTimeDate(){
        var d = new Date();
        this.current.hour = d.getHours();
        this.current.min = d.getMinutes();
        this.current.second = d.getSeconds();
        this.current.millisec = d.getMilliseconds();

        this.current.month = d.getMonth() + 1;
        this.current.day = d.getDate();
        this.current.year = d.getFullYear();
    }

    setOtherTimeDate(loc, offset){
        var d = new Date();

        //get utc time
        var utc_offset = d.getTimezoneOffset();
        d.setMinutes(d.getMinutes() + utc_offset);
        
        //offest UTC time for location
        var areaOffset = offset*60;
        d.setMinutes(d.getMinutes() + areaOffset);

        //assign hours to the specific location
        loc.hour = d.getHours();
        loc.min = d.getMinutes();
        loc.second = d.getSeconds();
        loc.millisec = d.getMilliseconds();

        loc.month = d.getMonth() + 1;
        loc.day = d.getDate();
        loc.year = d.getFullYear();

    }

    @action refreshTime(){
        this.setCurrentTimeDate();
        this.setOtherTimeDate(this.moscowRussia, 3)
    }
}