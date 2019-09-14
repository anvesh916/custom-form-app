export class Control {

    public labelName: String;
    public controlType: String;
    public placeholder: String;
    public controlHeader:String;

    constructor(label: String, control: String, placeholder: String) {
        this.labelName = label;
        this.controlType = control;
        this.placeholder = placeholder;
        this.controlHeader = control;
     
    }
}