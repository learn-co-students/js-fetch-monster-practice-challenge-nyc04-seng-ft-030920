let monsterContainer = document.getElementById('monster-container')
let createMonstersForm = document.getElementById('create-monster')


fetch('http://localhost:3000/monsters/?_limit=100&_page=4')
.then(r => r.json())
.then(monstersObject => {
    
    
    monstersObject.forEach(element => {
            renderMosters(element)
            
     })
    }
)


function renderMosters(monsters){

    let div = document.createElement('div')
    let header = document.createElement('h2')
    header.innerText = monsters.name
    let headerAge = document.createElement('h4')
    headerAge.innerText = monsters.age
    let p = document.createElement('p')
    p.innerText = monsters.description

    div.append(header , headerAge , p)

    monsterContainer.append(div)
    


}




    let createMonsters = document.createElement('form')
    
    let name = document.createElement("input")

    let age = document.createElement("input")
    let description = document.createElement("input")
    name.type = "text"
    name.name = "monsters"
    name.placeholder = "name"
    age.type = "text"
    age.name = "age"
    age.placeholder = "age"
    description.type = "text"
    description.name = "description"
    description.placeholder = "description"

    let button = document.createElement("button")
    button.innerText = "Create Monster"
    button.id = "create-monsters"
    createMonsters.append(name , age , description , button)
    createMonstersForm.append(createMonsters)
    
createMonsters.addEventListener('submit' , function(event) {
    event.preventDefault()

     let monstersName =  event.target["monsters"].value 
     let age = event.target["age"].value 
     let description = event.target["description"].value

    fetch('http://localhost:3000/monsters' , {

        method: "POST",
        headers: {
  
          "Content-Type": "application/json",
           Accept: "application/json"
  
        },
        body: JSON.stringify({
            name : monstersName, 
            age : age , 
            description : description
        })
  
  
  
  
    }).then(r => r.json())
    .then(monstersObj => {
        console.log(monstersObj)
        createMonsters.reset()
    })
})


