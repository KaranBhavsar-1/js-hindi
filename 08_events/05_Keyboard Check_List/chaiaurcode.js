const insert = document.querySelector("#insert")
const table = document.querySelector("table")
let num = 1
window.addEventListener("keydown", (e)=>{
  table.innerHTML +=`

  <tr>
    <td>${num}</td>
    <td>${e.key ===" " ? "space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
`
})