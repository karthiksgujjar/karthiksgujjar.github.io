const attendanceButton = document.querySelector('.attendance-button');
const remarkContainer = document.getElementsByClassName('Toastify')[0];
let remark;
function remarkExtract(){
    return new Promise(resolve => {
        setTimeout(() => { remark = remarkContainer.children[0].textContent; 
        resolve();
        }, 1000);
    })
}
const intervalValue = setInterval(async () => {
    attendanceButton.click();
    await remarkExtract();
    if (!(remark.endsWith('Trainer'))){
        clearInterval(intervalValue)
        
    }
}, 45000);



async function aMarker()
{
    attendanceButton.click();
    await remarkExtract();
    if ((remark.endsWith('Trainer'))){
        console.log("Working!!")
    }
        // clearInterval(intervalValue)
}
