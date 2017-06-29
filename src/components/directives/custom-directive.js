
// document: https://vuejs.org/v2/guide/custom-directive.html

export default {
  bind: function (el, binding, vnode) {
    console.log('custom-directive - bind')

    let s = JSON.stringify
    el.innerHTML +=
      `
      
      <h4>custom-directive - bind</h4>
      date: ${new Date()} <br>
      name: ${s(binding.name)} <br>
      value: ${s(binding.value)} <br>
      expression: ${s(binding.expression)} <br>
      argument: ${s(binding.arg)} <br>
      modifiers: ${s(binding.modifiers)} <br>
      vnode keys: ${Object.keys(vnode).join(', ')} 
      
      `
  },
  inserted: function (el, binding, vnode) {
    console.log('custom-directive - inserted')

    let s = JSON.stringify
    el.innerHTML +=
      `
      
      <h4>custom-directive - inserted</h4>
      date: ${new Date()} <br>
      name: ${s(binding.name)} <br>
      value: ${s(binding.value)} <br>
      expression: ${s(binding.expression)} <br>
      argument: ${s(binding.arg)} <br>
      modifiers: ${s(binding.modifiers)} <br>
      vnode keys: ${Object.keys(vnode).join(', ')} <br>
      
      `
  },
  update: function (el, binding, vnode, oldVnode) {
    console.log('custom-directive - update')

    let s = JSON.stringify
    el.innerHTML +=
      `
      
      <h4>custom-directive - update</h4>
      date: ${new Date()} <br>
      name: ${s(binding.name)} <br>
      value: ${s(binding.value)} <br>
      expression: ${s(binding.expression)} <br>
      argument: ${s(binding.arg)} <br>
      modifiers: ${s(binding.modifiers)} <br>
      vnode keys: ${Object.keys(vnode).join(', ')} <br>
      oldVnode keys: ${Object.keys(oldVnode).join(', ')} <br> 
      
      `
  },
  componentUpdated: function (el, binding, vnode, oldVnode) {
    console.log('custom-directive - componentUpdated')

    let s = JSON.stringify
    el.innerHTML +=
      `
      
      <h4>custom-directive - componentUpdated</h4>
      date: ${new Date()} <br>
      name: ${s(binding.name)} <br>
      value: ${s(binding.value)} <br>
      expression: ${s(binding.expression)} <br>
      argument: ${s(binding.arg)} <br>
      modifiers: ${s(binding.modifiers)} <br>
      vnode keys: ${Object.keys(vnode).join(', ')} <br> 
      oldVnode keys: ${Object.keys(oldVnode).join(', ')} <br> 
      
      `
  },
  unbind: function (el, binding, vnode) {
    console.log('custom-directive - unbind')

    let s = JSON.stringify
    el.innerHTML +=
      `      
      <h4>custom-directive - unbind</h4>
      date: ${new Date()} <br>
      name: ${s(binding.name)} <br>
      value: ${s(binding.value)} <br>
      expression: ${s(binding.expression)} <br>
      argument: ${s(binding.arg)} <br>
      modifiers: ${s(binding.modifiers)} <br>
      vnode keys: ${Object.keys(vnode).join(', ')} <br>
      
      `
  }
}
