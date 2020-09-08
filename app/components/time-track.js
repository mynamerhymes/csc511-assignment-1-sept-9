import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking'

export default class TimeTrackerComponent extends Component {
    @tracked dateTime 
    @tracked dateTimeItaly

    constructor(){
        super(...arguments)
        this.setDateTime()
    }

    month = ''
    day = ''
    year = ''
    hours = ''
    minutes = ''
    seconds = ''
    mSeconds = ''

    setDateTime(){
         var date= new Date()
         this.month = date.getMonth()
         this.day = date.getDate()
         this.year = date.getFullYear()
         this.hours = date.getHours()
         this.minutes = date.getMinutes()
         this.seconds = date.getSeconds()
         this.mSeconds = date.getMilliseconds()    
        
        let data = {
            month: this.month,
            day: this.day,
            year: this.year,
            hours: this.hours,
            minutes: this.minutes,
            seconds: this.seconds,
            mSeconds:this.mSeconds
        }

        
        let tempHours = this.hours + 6;

        if(tempHours > 24)
            tempHours = tempHours - 24
        
        

        let dataItaly = {
            month: this.month,
            day: this.day,
            year: this.year,
            hours: tempHours,
            minutes: this.minutes,
            seconds: this.seconds,
            mSeconds:this.mSeconds
        }

        this.dateTime = data
        this.dateTimeItaly = dataItaly
    }
    
}


