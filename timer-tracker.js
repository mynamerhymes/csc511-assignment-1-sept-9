import Component from '@glimmer/component';
import {tracked } from '@glimmer/tracking';
import {action} from '@ember/object';

export default class TimerTrackerComponent extends Component {
    @tracked hour = null; 
    @tracked minute = null;
    @tracked seconds = null;
    @tracked ms = null;
    @tracked month = null;
    @tracked day = null;
    @tracked year = null;
    @tracked tzMinsk = null;

    constructor(options) {
        super(...arguments);
        this.setTimeNY();
        this.setDateNY();
        this.setTZMinsk();
    }
    setTimeNY(){
        var tdinfo = new Date();
        this.hour = tdinfo.getHours();
        this.minute = tdinfo.getMinutes();
        this.seconds = tdinfo.getSeconds();
        this.ms = tdinfo.getMilliseconds();
    }
    setDateNY(){
        var tdinfo = new Date();
        this.month = tdinfo.getMonth()+1;
        this.day = tdinfo.getDate();
        this.year = tdinfo.getFullYear();
    }

    refresh(){
        this.hour = null; 
        this.minute = null;
        this.seconds = null;
        this.ms = null;
        this.month = null;
        this.day = null;
        this.year = null;
        this.tzMinsk = null;
        this.setTimeNY();
        this.setDateNY();
        this.setTZMinsk();
        }

    setTZMinsk(){
        var tzinfo = new Date().toLocaleString("en-US", {timeZone: "Europe/Minsk"}); //could also use this for current location, would not have to use code above could simply input timezone as New York
        this.tzMinsk = (new Date(tzinfo));
    }

}