import Component from '@glimmer/component';
import {tracked } from '@glimmer/tracking';
import {action} from '@ember/object';

export default class SimpleDateTimeComponent extends Component {
    @tracked NewYork_tz = null;
    @tracked Tokyo_tz = null;
    @tracked temp_tz = null;

    constructor(){
        super(...arguments);
        this.setLocalDatetime();
        this.setTokyoDateTime();
    }
    
    setLocalDatetime(){
        //OUTPUT
        //America/NewYork: Mon Sep 14 2020 12:57:05 GMT-0400 (Eastern Daylight Time)
    
        var today = new Date();
        var year = today.getFullYear();
        var month= today.getMonth()+1;
        var day= today.getDate();
        var hour= today.getHours();
        var min= today.getMinutes();
        var sec= today.getSeconds();
        var ms=today.getMilliseconds();
        var date = year +'-'+ month+'-'+ day;
        var time = hour + ":" + min + ":" + sec + ":"+ ms;
        this.NewYork_tz= date+' '+time;        
        this.temp_tz = new Date(year, month, day, hour, min, sec, ms); //save for the tokyo_tz conversion
    }


    setTokyoDateTime(){
        //Tokyo, Japan is 13 hours ahead of New York, NY
        var TokyoDatetime = this.temp_tz;
        TokyoDatetime = new Date(TokyoDatetime.setHours(TokyoDatetime.getHours()+13));
        var year = TokyoDatetime.getFullYear();
        var month= TokyoDatetime.getMonth();
        var day= TokyoDatetime.getDate();
        var hour= TokyoDatetime.getHours();
        var min= TokyoDatetime.getMinutes();
        var sec= TokyoDatetime.getSeconds();
        var ms=TokyoDatetime.getMilliseconds();
        var date = year +'-'+ month+'-'+ day;
        var time = hour + ":" + min + ":" + sec + ":"+ ms;
        this.Tokyo_tz = date+' '+time;
    }

    refresh(){
        this.NewYork_tz = null;
        this.Tokyo_tz = null;
        this.temp_tz = null;
        this.setLocalDatetime();
        this.setTokyoDateTime();
    }
}