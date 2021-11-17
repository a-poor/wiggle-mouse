import { Command, flags } from '@oclif/command'
import cli from 'cli-ux'
import * as robot from 'robotjs'


class WiggleMouse extends Command {
  static description = "A CLI to keep your screen active by moving the mouse around randomly."

  static flags = {
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
    
    rate: flags.integer({
      char: 'r', 
      description: "Rate of movement in milliseconds",
      default: 1500,
    }),
    click: flags.boolean({
      char: 'c', 
      description: "Should the mouse be intermittantly clicked?",
      default: false,
    }),
    clickrate: flags.integer({
      description: "Probability to click (out of 100) where the mouse lands, if click is true.",
      default: 100,
    }),
    mousepos: flags.boolean({
      char: 'p',
      description: "Display the position of the mouse (and don't run the wiggler)",
      default: false,
    }),
    until: flags.integer({
      char: 'u',
      required: false,
      description: "Number of milliseconds to run the wiggler",
    }),
    
  }

  async run() {
    const { flags } = this.parse(WiggleMouse)

    console.log(JSON.stringify(flags))

    // Check if the position flag is set
    if (flags.mousepos) {
      const { x, y } = robot.getMousePos()
      this.log(`Mouse position: ${x},${y}`)
      return
    }

    // Get the screen size
    const { width, height } = robot.getScreenSize()
    const startTime = Date.now()

    const clickRate = flags.clickrate || 100

    cli.action.start('Wiggling the mouse...')
    try {
      while (flags.until === undefined || Date.now() - startTime < flags.until) {
        // Move the mouse randomly
        const x = Math.random() * width
        const y = Math.random() * height
        robot.moveMouse(x, y)
  
        // Click?
        if (flags.click && Math.random() * 100 < flags.clickrate) {
          robot.mouseClick()
        }
  
        // Sleep
        await new Promise(resolve => setTimeout(resolve, flags.rate))
      }
    } finally {
      cli.action.stop("Done wiggling.")
    }
    
  }
}

export = WiggleMouse
