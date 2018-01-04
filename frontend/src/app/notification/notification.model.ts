export class Notification {
  constructor(sender: string, message: string) {
    this.sender = sender;
    this.message = message;
  }
  sender: string;
  message: string;
}
