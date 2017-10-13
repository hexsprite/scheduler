import { WorkSession } from './WorkSession'

type Duration = number

interface IActionSpec {
  title: string
  duration: Duration
}

export class Action {
  public duration: Duration
  public sessions: WorkSession[]
  public title: string

  constructor(spec: IActionSpec) {
    this.title = spec.title
    this.duration = spec.duration
  }

  public rename(title: string): void {
    this.title = title
  }
}
