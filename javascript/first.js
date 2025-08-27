function getElement(id) {
    const element = document.getElementById(id)
    return element
}

getElement('service-box').addEventListener('click', function (e) {
    if (e.target.className.includes('heart-icon')) {
        const heartCount = getElement('heart-count').innerText;
        const currentHeartCount = Number(heartCount) + 1;
        getElement('heart-count').innerText = currentHeartCount;
    }
})

getElement('call-button-1').addEventListener('click', function () {






}
)

getElement('service-box').addEventListener('click', function (e) {
    // alert('fd')
    if (e.target.className.includes('call-button')) {
        const coin = getElement('coin-button').innerText;
        const currentCoin = (Number(coin) - 20)
        if (currentCoin < 0) {

            alert('❌ আপনার পর্যাপ্ত কয়েন নেই কল করতে কমপক্ষে ২০ কয়েন লাগবে ।')
            currentCoin = 0
        }
        getElement('coin-button').innerText = currentCoin
        // const negative = Math.abs(currentCoin)
        if (currentCoin >= 0 && currentCoin < 100) {
            alert('📞 National Emergency 999...');


        }

        const callButton = e.target
        // console.log(callButton)
        const serviceTitle = callButton.parentNode.parentNode.children[1].innerText
        // console.log(serviceTitle)
        const serviceNumber = callButton.parentNode.parentNode.children[3].innerText
        // console.log(serviceNumber)

        const dataDate = []
        const data = {
            date: new Date().toLocaleTimeString()
        }
        dataDate.push(data)


        const callHistory = getElement('call-history')

        const newCallHistory = document.createElement('div')
        newCallHistory.innerHTML = `
        <div class="my-5 flex justify-between items-center px-4">
            <div>   
                <h1 class="font-normal text-[18px] mt-4">${serviceTitle}</h1>
                <h1 class="font-normal text-[18px] mt-">${serviceNumber} </h1>
             </div>
                 <h1 class="font-normal text-[18px] mt-">${data.date} </h1>
         </div>
    
    `;
        callHistory.append(newCallHistory)



        getElement('clear-button').addEventListener('click', function () {
            // alert('fe')
            const callHistory = getElement('call-history')
            callHistory.innerHTML = ""
        })

    }



})


getElement('service-box').addEventListener('click', function (e) {
    if (e.target.className.includes('copy-button')) {
        const copyButton = e.target
        const serviceNumber = copyButton.parentNode.parentNode.children[3].innerText
        alert('নাম্বার কপি '+serviceNumber)
        const copyCount = getElement('copy-count').innerText
    const currentCopyCount = Number(copyCount) + 1
    getElement('copy-count').innerText = currentCopyCount
    console.log(currentCopyCount)
      

    }

}
)

//  function copyColor() {
//             let copyBox = document.getElementById("national-number");
//             alert('hello')
//             // select its text
//             copyBox.select();
//             // copy to clipboard
//             document.execCommand("copy");
//             alert("Copied: " + copyBox.value);
//         }

// getElement('copy-button-1').addEventListener('click', function () {
//     // alert()
     
    
// })