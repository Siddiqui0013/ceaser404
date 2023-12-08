enSolution.style.display = "none"
deSolution.style.display = "none"
decrypt.style.display = "none"

decryptBtn.addEventListener("click", ()=>{
    eKey.value = "";
    ePlain.value = "";
    eText.value = "";
    ceaserText.value = "";
    decrypt.style.display = "block"
    encrypt.style.display = "none"
})

encryptBtn.addEventListener("click", ()=>{
    dKey.value = "";
    ceaserText.value == "";
    dText.value = "";
    decrypt.style.display = "none"
    encrypt.style.display = "block"
})

Ebtn.addEventListener("click", ()=>{

    let Ekey = Number.parseInt(eKey.value)
    console.log(Ekey)
    if (ePlain.value.trim() === "") {
        alert("Please Enter a Text")
    }


 else if (isNaN(Ekey) || Ekey < -26 || Ekey > 26) {
    alert("Please Enter a Valid Key")

}

    else {
    const plainText = ePlain.value

    // localStorage.clear()
    let CeaserArr= plainText.split("")

let EnArr = CeaserArr.map((ch) => {

    let ChCode = ch.charCodeAt();
    let NewChCode;

    if (ch >= 'A' && ch <= 'Z') {
        NewChCode = ChCode + Ekey;
        if (NewChCode > 'Z'.charCodeAt(0)) {
            NewChCode -= 26;
        }
    } else if (ch >= 'a' && ch <= 'z') {
        NewChCode = ChCode + Ekey;
        if (NewChCode > 'z'.charCodeAt(0)) {
            NewChCode -= 26;
        }
    } else {
        NewChCode = ChCode;
    }

    let NewCh = String.fromCharCode(NewChCode);
    return NewCh;
});
        
const EnString = EnArr.join('')
console.log(EnString)

// localStorage.setItem(Ekey, EnString)
const userData = {
    key: Ekey,
    text: EnString
}
// localStorage.clear()
localStorage.setItem('encryptionData', JSON.stringify(userData));

enSolution.style.display = "block"
eText.value = EnString
}
})

Dbtn.addEventListener("click", () => {
    var Ekey = Number.parseInt(dKey.value)

    if (ceaserText.value == "") {
        alert("Please Enter a Text")
    } 
    else if (isNaN(Ekey) || Ekey < -26 || Ekey > 26) {
        alert("Please Enter a Valid Key")
    }
    else {

        const storedEncryptionData = JSON.parse(localStorage.getItem('encryptionData'));
        if (storedEncryptionData) {
            const storedKey = storedEncryptionData.key;
            const encryptedText = storedEncryptionData.text;

            if (Ekey === storedKey) {
                const ceaser = ceaserText.value;
                let CeaserArr = ceaser.split("");
                let Dkey = Number.parseInt(dKey.value);
        
                let DeArr = CeaserArr.map((ch) => {
                    if (ch >= 'A' && ch <= 'Z') {
                        let ChCode = ch.charCodeAt();
                        let NewChCode = ChCode - Dkey;
                        if (NewChCode < 'A'.charCodeAt(0)) {
                            NewChCode += 26;
                        }
                        return String.fromCharCode(NewChCode);
                    } else if (ch >= 'a' && ch <= 'z') {
                        let ChCode = ch.charCodeAt();
                        let NewChCode = ChCode - Dkey;
                        if (NewChCode < 'a'.charCodeAt(0)) {
                            NewChCode += 26;
                        }
                        return String.fromCharCode(NewChCode);
                    } else {
                        return ch;
                    }
                });
        
                const EnString = DeArr.join('');
        
                deSolution.style.display = "block";
                dText.value = EnString;
            }

            else {
                // Show alert for using the correct key
                alert("To decrypt this text, use the key: " + storedKey);
            }
        } else {
            // Handle case where no encryption data is found
            alert("No encryption data found. Please encrypt some text first.");
        }

    }
});




// Decryptbtn.addEventListener("click", () => {
//     let ceaser = ceaserText.value.trim();
//     let providedKey = Number.parseInt(dKey.value);

//     if (ceaser === "") {
//         alert("Please Enter a Text");
//     } else if (isNaN(providedKey) || providedKey < -26 || providedKey > 26) {
//         alert("Please Enter a Valid Key");
//     } else {
//         // Retrieve encryption data from localStorage
//         const storedEncryptionData = JSON.parse(localStorage.getItem('encryptionData'));

//         if (storedEncryptionData) {
//             const storedKey = storedEncryptionData.key;
//             const encryptedText = storedEncryptionData.encryptedText;

//             if (providedKey === storedKey) {
//                 // Proceed with decryption using the provided key
//                 // Perform the decryption logic here
//                 // Compare the decrypted text with the provided input 'ceaser'
//                 // Display the result accordingly
//             } else {
//                 // Show alert for using the correct key
//                 alert("To decrypt this text, use the key: " + storedKey);
//             }
//         } else {
//             // Handle case where no encryption data is found
//             alert("No encryption data found. Please encrypt some text first.");
//         }
//     }
// });
