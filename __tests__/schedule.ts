import * as lolex from "lolex"
import { Action } from "../Action"
import { SingleActionScheduler } from "../SingleActionScheduler"

describe("scheduler", () => {
  let clock: lolex.Clock
  let scheduler: SingleActionScheduler

  beforeEach(() => {
    clock = lolex.install({ now: new Date("1977-03-21T09:00:00.000Z") })
    scheduler = new SingleActionScheduler()
  })

  afterEach(() => {
    clock.uninstall()
  })

  it("schedules single action", () => {
    const action = new Action()
    const sessions = scheduler.scheduleAction(action)
    expect(sessions.length).toBe(1)
    const workSession = sessions[0]
    expect(workSession.start).toEqual(new Date())
  })
})
