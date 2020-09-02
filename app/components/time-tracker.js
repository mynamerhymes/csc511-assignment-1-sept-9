import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import {action} from '@ember/object';
 

    @tracked myTime = null;
    @tracked myDate = null;
    @tracked diffDate = null;
    @tracked diffTime = null;
    @tracked Count = 0;
    
export default class TimerTrackerComponent extends Component 
{
   

    constructor()
    {
        super(...arguments);
        this.loadTime();
        this.showDate();
        this.ShowDiffDate();
        this.loadDiffTime();
    }

    loadTime()
    {
        let newTime = new Date();
        let hours = newTime.getHours();
        let min = newTime.getMinutes();
        let sec = newTime.getSeconds();
        let milli = newTime.getMilliseconds();
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
        if(milli < 100){
            if(milli < 10){
                milli = "00" + milli;
            }
            else
            milli = "0" + milli;
        }
        if(hours < 12){
            PM = 'AM';
        }
        this.myTime = hours + ":" + min + ":" + sec + ":" + milli + " " + PM;
        setInterval(() => {this.loadTime();}, 1000);
    }

    showDate()
    {
        let dateNow = new Date();
        this.myDate = dateNow.toLocaleDateString();
    }

    ShowDiffDate(){
        let dateNow = new Date();
        this.diffDate = dateNow.toLocaleDateString('en-us', {
            timeZone: "Africa"
        });
    }
    showdifftime()
    {
        let newTime = new Date();
        let milli = newTime.getMilliseconds();
        let sec = newTime.getSeconds();
        let min = newTime.getMinutes();
        let hours = newTime.getUTCHours()+1;
        let PM = 'PM';

        if(hours < 12)
        {
            PM = 'AM';
        }
        if(hours > 12)
        {
            hours -= 12;
        }
        if(min < 10)
        {
            min = "0" + min;
        }
        if(sec < 10)
        {
            sec = "0" + sec;
        }
        if(milli < 100)
        {
            if(milli < 10){
                milli = "00" + milli;
            }
            else
            milli = "0" + milli;
        }      
        this.diffTime = hours + ":" + min + ":" + sec + ":" + milli + " " + PM;
        setInterval(() => {this.loadDiffTime();}, 1000);
    }

    @action
    refresh()
    {
        this.myDate = null;
        this.myTime = null;
        this.diffDate = null;
        this.diffTime = null;
        this.loadTime();
        this.loadDiffTime();
        this.loadDate();
        this.loadDiffDate();
        this.Count++;
    }
}