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
        let time = new Date().toLocaleTimeString();
        let timeNow = time.split(" ");
        let ms = new Date().getMilliseconds();
        if(ms < 100){
            if(ms < 10){
                ms = "00" + ms;
            }
            else
            ms = "0" + ms;
        }             
        this.myTime = timeNow[0] + ":" + ms + " " + timeNow[1];
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
        let tz = new Date().toLocaleTimeString('en-us', {
            timeZone: "Asia/Tokyo"
        });
        let timeNow = tz.split(" ");
        let ms = new Date().getMilliseconds();
        if(ms < 100){
            if(ms < 10){
                ms = "00" + ms;
            }
            else
            ms = "0" + ms;
        } 
        this.diffTime = timeNow[0] + ":" + ms + " " + timeNow[1];
        setInterval(() => {this.loadDiffTime();}, 1000);
    }

    @action
    refreshValues(){
        this.loadTime();
        this.loadDate();
        this.loadDiffDate();
        this.loadDiffTime();
        this.refreshedCount++;
    }
}