// import { Action } from './Action'
import { WorkSession } from "./WorkSession"

export class SingleActionScheduler {
  public scheduleAction(action: Action) {
    console.log(action.duration)
    const session = new WorkSession()
    session.start = new Date()
    return [session]
  }
}
