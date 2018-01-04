export class ChatRecord {
  constructor(sender: string, sendTime: string, content: string) {
    this.sender = sender;
    this.sendTime = sendTime;
    this.content = content;
  }
  sender: string;
  sendTime: string;
  content: string;
}
