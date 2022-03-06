function show() {
    document.getElementById('pop').classList.remove('none')
    document.getElementById('pop').classList.add('detail')
    document.getElementById('name').innerText = document.getElementById('item').innerText+"13pro";
console.log(' hi show')
}
function hide() {
    document.getElementById('pop').classList.remove('detail')
    document.getElementById('pop').classList.add('none')
    console.log(' hi hide')
}