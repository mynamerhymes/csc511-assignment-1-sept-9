import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';

export default class TimeTrackerComponent extends Component {

    @tracked time;

    constructor(){
        super(...arguments);
        this.loadTime(true);
    }
    
    async loadTime(shouldRefresh) {
        let tzone = this.args.tzone || "America/New_York";
        let tempDate = new Date();
        let adjustedTzone = tempDate.toLocaleString("en-US",{timeZone: tzone});
        let now = new Date(adjustedTzone);
        let formattedDate = `${now.getDate()} ${monthNames[now.getMonth()]} ${now.getFullYear()}`;
        this.time = `${formattedDate} - ${now.getHours()}:${('0'+now.getMinutes()).slice(-2)}:${('0'+now.getSeconds()).slice(-2)}.${('00'+tempDate.getMilliseconds()).slice(-3)}`;
        if(shouldRefresh){
            setTimeout(() => {this.loadTime(shouldRefresh);}, 1000);
        }
    }

    refresh() {
        this.loadTime(false);
    }
}


let monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
];
