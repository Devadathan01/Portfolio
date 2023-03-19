const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})



let counts=setInterval(updated);
        let upto=0;
        function updated(){
            var count= document.getElementById("counter");
            count.innerHTML=++upto;
            if(upto===85)
            {
                clearInterval(counts);
            }
        }

        

const progressbar = document.querySelector(".progress");
const changeProgress = (progress) => {
  progressbar.style.width = `${progress}%`;
};

/* change progress after 1 second (only for showcase) */
setTimeout(() => changeProgress(22), 100);
setTimeout(() => changeProgress(45), 200);
setTimeout(() => changeProgress(85), 300);