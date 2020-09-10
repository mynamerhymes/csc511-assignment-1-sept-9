import Component, { tracked } from '@glimmer/component';

export default class DateTimeComponent extends Component {
    @tracked date;
    @tracked time;
    @tracked tz;

    constructor(options) {
        super(options);
        this.getNewDate();
    }

    async getNewDate() {
        let tzone1 = this.args.tzone1 || "America/New_York";
        let tz = new Date().toLocaleString("en-US", { timeZone: tzone1 });

        let timeZone1 = new Date(tz);

        let tzone2 = this.args.tzone2 || "Asia/Jerusalem";
        let timeZone2 = new Date().toLocaleString("en-US", { timeZone: tzone2 });

        let t = timeZone1.toLocaleTimeString();

        this.date = timeZone1.toDateString();
        this.time = t;
        this.tz = timeZone2;

        setTimeout(() => { this.getNewDate(); }, 1000);
    }

    refresh() {
        this.date = this.getNewDate();
        this.time = this.getNewDate();
        this.tz = this.getNewDate();
    }

}
