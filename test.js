class TV {
    constructor(brand) {
      this.brand = brand;
      this.channel = 50;
      this.volume = 1;
    }
  
    increaseVolume() {
      if (this.volume < 100) {
        this.volume++;
        console.log("Volume", this.volume);
      }
    }
    decreaseVolume() {
      if (this.volume >= 0) {
        this.volume--;
        console.log("Volume", this.volume);
      }
    }
    getNewChannel() {
      this.channel = Math.floor(Math.random() * 51);
      console.log(`Channel: ${this.channel}`);
    }
  
    getTVstatus() {
      return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
    }
  
    resetTV() {
      if(this.volume !== 1 || this.channel !== 50) {
        this.channel = 1;
        this.volume = 50
        console.log(`The TV has been reset to ${this.channel} and ${this.volume}`);
      }
    }
  }
  
  const tv = new TV("Panasonic");
  tv.increaseVolume();
  tv.decreaseVolume();
  tv.getNewChannel();
  console.log(tv.getTVstatus());
  console.log(tv.resetTV());
  console.log(tv.getTVstatus());

//   Example mit extend Parent Class 

  class AwsomeTV extends TV{
    constructor(brand) {
        super(brand);
    }
    letTVTalk(sentence){
        return sentence
    }
}

const modernTV = new AwsomeTV()
console.log(modernTV.letTVTalk("Hi there, how are you doing?"));
console.log("welche Properties hat der moderneTV alle übernommen", modernTV);
// Outcome => { brand: undefined, channel: 50, volume: 1 }