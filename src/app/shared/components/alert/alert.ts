export class Alert {

  constructor(
    private readonly alterType: AlertType,
    private readonly message: string
  ) {}

}

export enum AlertType {
  SUCCESS, WARNING, DANGER, INFO
}
