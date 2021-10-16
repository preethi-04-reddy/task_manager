let globalTaskData = [];
taskContensts = document.getElementById("taskContensts");


const addcard = () => {
    const newTaskDetails = {
        id: `${Date.now()}`,
        URL: document.getElementById("Task_image").value,
        title: document.getElementById("Task_title").value,
        description: document.getElementById("Task_description").value,
        type: document.getElementById("Task_type").value
    };

    taskContensts.insertAdjacentHTML('beforeend', genarateTaskCard(newTaskDetails));

    globalTaskData.push(newTaskDetails)
    savaToLocalStorage();
}

const genarateTaskCard = ({ id, URL, title, description, type }) => {
    return (`<div class="col-md-6 col-lg-4 mt-3" id=${id} keys=${id}>
<div class=" card ">
        <div class="card-header d-flex justify-content-end"
            style="color:black;background-color: blanchedalmond; ">
            <button type="button" class="btn btn-outline-dark" name=${id} onclick="editTask(this)">
                <i class="fas fa-pencil-alt" name=${id} onclick="editTask(this)"></i>
            </button>
            <button type="button" class="btn btn-outline-dark" name=${id} onclick="deleteTask(this)">
                <i class="far fa-trash-alt"  name=${id} onclick="deleteTask(this)"></i>
            </button>
            
        </div>
        <div class="card-body text-center " style="color: blanchedalmond;">
            <div class="row">
                <div class=" col-4">
                    <img src=${URL} class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-8 mb-2" style="background-color: black;color: blanchedalmond;">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${description}</p>
                    <span class="badge bg-dark">${type}</span>
                </div>
                
                <div class="card-footer text-muted" style="background-color: antiquewhite;">
                 
                </div>
            </div>

        </div>
    </div>
</div>`)
}
const savaToLocalStorage = () => {
    localStorage.setItem("Task-manager", JSON.stringify({ tasks: globalTaskData }));
}
const reloadTaskCard = () => {
    const localStorageCopy = JSON.parse(localStorage.getItem("Task-manager"));
    console.log(localStorageCopy);
    if (localStorageCopy) {
        globalTaskData = localStorageCopy["tasks"];
    }
    globalTaskData.map((carddata) => {
        taskContensts.insertAdjacentHTML('beforeend', genarateTaskCard(carddata));
    })
}
const deleteTask = (e) => {

    const targetID = e.getAttribute("name");
    globalTaskData = globalTaskData.filter((cardData) => cardData.id !== targetID);
    savaToLocalStorage();
    window.location.reload();

}
const editTask = (e) => {
   // e.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[5].childNodes[1].innerHTML = "SAVE CHANGES";
   // e.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[5].childNodes[1].setAttribute("onclick", "saveEditTask(this)");

     //console.log(e.parentNode.parentNode.childNodes[1].childNodes[1].innerHTML="save")

    // console.log(e.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[5].childNodes[1])
    // console.log(e.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[3].childNodes[1])
    // console.log(e.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[3].childNodes[3])
    // console.log(e.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[3].childNodes[5])

    e.parentNode.parentNode.childNodes[1].childNodes[1].innerHTML="save";
    e.parentNode.parentNode.childNodes[1].childNodes[1].setAttribute("onclick","saveEditTask(this)");
    console.log(e.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[3].childNodes[1].setAttribute("contenteditable", "true"))
    console.log(e.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[3].childNodes[3].setAttribute("contenteditable", "true"))
    console.log(e.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[3].childNodes[5].setAttribute("contenteditable", "true"))

    console.log(e.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[5].childNodes[1])

    // savaToLocalStorage();
    // window.location.reload();

}
const saveEditTask = (e) => {
    const targetID = e.getAttribute("name");
    console.log(targetID);
     const updateData = {
       id: targetID,
         title: e.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[3].childNodes[1].innerHTML,
         description: e.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[3].childNodes[3].innerHTML,
       type: e.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[3].childNodes[5].innerHTML
     }
     var len = globalTaskData.length;
     for (var i = 0; i < len; i++) {
         if (globalTaskData[i].id == targetID) {
            var index = i;
         }
     }
     globalTaskData[index] = updateData;
    
     savaToLocalStorage();
     window.location.reload();
    // e.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[5].childNodes[1].setAttribute("onclick", "saveEditTask(this)");
    // console.log(e.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[3].childNodes[1].setAttribute("contenteditable", "false"))
    // console.log(e.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[3].childNodes[3].setAttribute("contenteditable", "false"))
    // console.log(e.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[3].childNodes[5].setAttribute("contenteditable", "false"))
    // const targetID = e.getAttribute("name");
    // globalTaskData.forEach(function(cardData){
    //     if(cardData.title){
    //         cardData.title=e.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[3].childNodes[1].textcontent;
    //     }
    //     if(cardData.description){
    //         cardData.description=e.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[3].childNodes[3].textcontent;
    //     }
    //     cardData.type=e.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[3].childNodes[5].textcontent;
    // });
    // savaToLocalStorage();
    // }
}
