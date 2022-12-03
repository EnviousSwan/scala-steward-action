import * as core from '@actions/core'
import * as workspace from './workspace'
import * as coursier from './coursier'
import * as mill from './mill'

/**
 * Performs a cleanup of all the artifacts/folders created by this action.
 */
async function post(): Promise<void> {
  try {
    await workspace.remove()
    core.info('🗑 Scala Steward\'s workspace removed')
    await coursier.remove()
    core.info('🗑 Coursier binary removed')
    await mill.remove()
    core.info('🗑 Mill binary removed')
  } catch (error: unknown) {
    core.warning((error as Error).message)
  }
}

// eslint-disable-next-line unicorn/prefer-top-level-await
void post()
