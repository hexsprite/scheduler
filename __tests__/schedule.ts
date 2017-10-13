import * as lolex from 'lolex'
import { Action } from '../Action'
import { resetSessions, SingleActionScheduler } from '../SingleActionScheduler'

describe('scheduler', () => {
  let clock: lolex.Clock
  let scheduler: SingleActionScheduler

  beforeEach(() => {
    clock = lolex.install({ now: new Date('1977-03-21T09:00:00.000Z') })
    scheduler = new SingleActionScheduler()
  })

  afterEach(() => {
    resetSessions()
    clock.uninstall()
  })

  it('schedules single action', () => {
    const action = new Action({ title: 'test action', duration: Minutes(30) })
    scheduler.scheduleAction(action)
    expect(action.sessions).toMatchSnapshot()
  })

  it('schedules two actions', () => {
    const actions = [
      new Action({ title: 'test action', duration: Minutes(30) }),
      new Action({ title: 'test action', duration: Minutes(30) })
    ]
    actions.forEach(action => scheduler.scheduleAction(action))
    expect(actions.map(action => action.sessions)).toMatchSnapshot()
  })
})

const Minutes = (n: number) => n * 1000 * 60
