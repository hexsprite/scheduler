interface IWorkSessionCreate {
  duration: number
  note: string
  start: Date
  title: string
}

export class WorkSession {
  public duration: number
  public end: Date
  public start: Date
  public title: string

  constructor(spec: IWorkSessionCreate) {
    this.start = spec.start
    this.end = new Date(+spec.start + spec.duration)
    this.duration = spec.duration
  }

  public toString() {
    return `<WorkSession title="${this.title}" start=${this.start} end=${this
      .end} duration=${this.duration}>`
  }
}
