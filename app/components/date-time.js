import Component from '@glimmer/component';

export default class DateTime extends Component {

  now = new Date();

  formatDate = tz => `${this.now.toLocaleString("en-US",{timeZone: tz}).split(/\s/).slice(0,2).join(' ')}.${this.now.getMilliseconds()} ${this.now.toLocaleString("en-US",{timeZone: tz}).split(/\s/).slice(2,).join(' ')}`

  NewYorkTime = this.formatDate("America/New_York")
  JerusalemTime = this.formatDate("Asia/Jerusalem")

}
