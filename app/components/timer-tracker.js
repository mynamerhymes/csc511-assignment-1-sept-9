import Component from '@glimmer/component';

export default class TimerTrackerComponent extends Component {
    hour = null; //must set null until use
    minute = null;
    seconds = null;
    ms = null;
    month = null;
    day = null;
    year = null;
    timezone = null;
    constructor(options) {
        super(...arguments);
        this.setTime();
        this.setDate();
        this.tzone();
    }
    setTime(){
        var d = new Date();
        this.hour = d.getHours();
        this.minute = d.getMinutes();
        this.seconds = d.getSeconds();
        this.ms = d.getMilliseconds();
    }
    setDate(){
        var d = new Date();
        this.month = d.getMonth()+1; //have to add +1
        this.day = d.getDate();
        this.year = d.getFullYear();
    }
    refresh(){
        location.reload("refresh")
    }
    tzone(){
        var itTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Tokyo"}); //could also use this for current location, would not have to use code above could simply input timezone as New York
        this.timezone = (new Date(itTime));
    }
};