export class ShowButtons {
    settings: boolean;
    start: boolean;
    stop: boolean;
    reset: boolean;

    Set(settingsBt:boolean, startBt:boolean, stopBt:boolean, resetBt:boolean) {
        this.settings = settingsBt;
        this.start = startBt;
        this.stop = stopBt;
        this.reset = resetBt;
    }
}
