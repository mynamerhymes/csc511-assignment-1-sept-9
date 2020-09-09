import Component from '@glimmer/component';

export default class TimerComponent extends Component {

    hour = null;
    minute = null;
    seconds = null;
    ms = null;
    month = null;
    day = null;
    year = null;
    tz = null;
  
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
        this.month = d.getMonth()+1;
        this.day = d.getDate();
        this.year = d.getFullYear();
    }


    refresh(){
        location.reload("refresh")
    }

    tzone(){
        var itTime = new Date().toLocaleString("en-US", {timeZone: "Europe/Rome"});
        this.tz = (new Date(itTime));
    }

};
