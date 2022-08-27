import vex from 'vex-js'
import vexDialog from 'vex-dialog'

vex.registerPlugin(vexDialog)
vex.defaultOptions.className = 'vex-theme-wireframe'

function confirm (msg = 'Esta segura?', callback) {
  vex.dialog.confirm({
    message: msg,
    callback: function (value) {
      if (value) callback()
    }
  })
}

function showAlert (msg = '') {
  vex.dialog.alert(msg)
}

export { confirm, showAlert }
