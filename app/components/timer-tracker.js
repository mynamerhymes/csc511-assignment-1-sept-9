import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import {action} from '@ember/object';

export default class TimerTrackerComponent extends Component {
    @tracked myTime = null;
    @tracked myDate = null;
    @tracked diffDate = null;
    @tracked diffTime = null;
    @tracked refreshedCount = 0;

    constructor(){
        super(...arguments);
        this.loadTime();
        this.loadDate();
        this.loadDiffDate();
        this.loadDiffTime();
    }

    loadTime(){
        let timeNow = new Date();
        let hours = timeNow.getHours();
        let min = timeNow.getMinutes();
        let sec = timeNow.getSeconds();
        let ms = timeNow.getMilliseconds();
        let PM = 'PM';
        if(hours > 12){
            hours -= 12;
        }
        if(min < 10){
            min = "0" + min;
        }
        if(sec < 10){
            sec = "0" + sec;
        }
        if(ms < 100){
            if(ms < 10){
                ms = "00" + ms;
            }
            else
            ms = "0" + ms;
        }
        if(hours < 12){
            PM = 'AM';
        }
        this.myTime = hours + ":" + min + ":" + sec + ":" + ms + " " + PM;
        setInterval(() => {this.loadTime();}, 1000);
    }

    loadDate(){
        let dateNow = new Date();
        this.myDate = dateNow.toLocaleDateString();
    }

    loadDiffDate(){
        let dateNow = new Date();
        this.diffDate = dateNow.toLocaleDateString('en-us', {
            timeZone: "Asia/Tokyo"
        });
    }
    loadDiffTime(){
        let timeNow = new Date();
        let hours = timeNow.getUTCHours()+9;
        let min = timeNow.getMinutes();
        let sec = timeNow.getSeconds();
        let ms = timeNow.getMilliseconds();
        let PM = 'PM';
        if(hours < 12){
            PM = 'AM';
        }
        if(hours > 12){
            hours -= 12;
        }
        if(min < 10){
            min = "0" + min;
        }
        if(sec < 10){
            sec = "0" + sec;
        }
        if(ms < 100){
            if(ms < 10){
                ms = "00" + ms;
            }
            else
            ms = "0" + ms;
        }      
        this.diffTime = hours + ":" + min + ":" + sec + ":" + ms + " " + PM;
        setInterval(() => {this.loadDiffTime();}, 1000);
    }

    @action
    refreshValues(){
        this.myDate = null;
        this.myTime = null;
        this.diffDate = null;
        this.diffTime = null;
        this.loadTime();
        this.loadDate();
        this.loadDiffDate();
        this.loadDiffTime();
        this.refreshedCount++;
    }
}