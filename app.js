let projects_div = document.getElementById(`list_sec`);
let left = 0;
let right = -300;
document.getElementById(`scroll`).onclick = function () {
    if(right === 0 && left === -300){
        left = 0; right = -300;
        projects_div.style.right = `${right}%`;
        projects_div.style.left = `${left}%`
        return
    }
    projects_div.style.right = `${right += 100}%`
    projects_div.style.left = `${left -= 100}%`
}