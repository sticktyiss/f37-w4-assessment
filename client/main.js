const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const allFortunesBtn = document.getElementById("allFortunes")
const listFortune = document.querySelector('#section')
const form = document.querySelector('form')
const newFortuneMsg = document.querySelector("#newFortuneMsg")
const updateForm = document.getElementById('updateForm')
const updateFortuneMsg = document.querySelector("#updateFortuneMsg")
const deleteFortuneBtn = document.getElementById('deleteFortuneBtn')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            listFortune.innerHTML = ''
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            listFortune.innerHTML = ''
            const data = res.data;
            alert(data);
    });
};
const getAllFortunes = () => {
    axios.get("http://localhost:4000/api/fortunes/")
    .then(res => {
        listFortune.innerHTML = ''
        for(let i=0; i<res.data.length; i++){
            let listedFortune = document.createElement('div')
            listedFortune.innerHTML = `<h2>${res.data[i].fortune}</h2>`
            listFortune.appendChild(listedFortune)
        }
    })
}
const newFortune = body => {
    axios.post("http://localhost:4000/api/fortune/", body)
    .then(res => {
        listFortune.innerHTML = ''
        alert(`"${res.data}" has been added to the fortune list.`)
    })
    .catch(err => {
        console.log('Failed to post')
    })
}
submitFortune = e => {
    e.preventDefault()
    
    let fortuneMsg = {
        fortune: newFortuneMsg.value
    }
    
    newFortune(fortuneMsg)
    newFortuneMsg.value = ''
}
const updateFortune = update => {
    //FIXME:
    axios.put("http://localhost:4000/api/fortune/", update)
    .then(res => {
        listFortune.innerHTML = ''
        alert(`You have updated one of the fortunes to be "${res.data}"`)
    })
    .catch(err => {
        alert('update failed')
    })
}
submitUpdatedFortune = e => {
    e.preventDefault()
    
    let fortuneMsg = {
        fortune: updateFortuneMsg.value
    }
    
    updateFortune(fortuneMsg)
    updateFortuneMsg.value = ''
}
const deleteFortune = () => {
    axios.delete("http://localhost:4000/api/fortune/")
    .then(res => {
        listFortune.innerHTML = ''
        alert(`Delete Successful!\nThere are now ${res.data.length} fortunes.`)
    })
    .catch(err => {
        alert('delete failed')
    })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
allFortunesBtn.addEventListener('click', getAllFortunes)
form.addEventListener('submit', submitFortune)
updateForm.addEventListener('submit', submitUpdatedFortune)
deleteFortuneBtn.addEventListener('click', deleteFortune)