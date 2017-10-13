import { Action } from './Action'
import { WorkSession } from './WorkSession'

let sessions: WorkSession[] = []

export class SingleActionScheduler {
  public scheduleAction(action: Action) {
    let start = new Date()
    for (const session of sessions) {
      start = session.end
    }
    const newSession = new WorkSession({
      duration: action.duration,
      note: '',
      start,
      title: action.title
    })
    sessions.push(newSession)
    action.sessions = [newSession]
  }
}

export function resetSessions() {
  sessions = []
}
