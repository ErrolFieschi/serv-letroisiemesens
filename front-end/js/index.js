const api_url_by_id = "http://localhost:3000/api/recipe/63275ebaf413e5abcb0c8310";
const api_find_all = "http://localhost:3000/api/recipe";

async function getApiRecette(){
    const res = await fetch(api_url_by_id);
    const data = await res.json();
    //console.log(data);
    //console.log(data.name);
    //console.log(data.id);
}

async function getApiRecetteAll(){
    const res = await fetch(api_find_all);
    const data = await res.json();
    var card = " ";
    for(let r of data.recipes){
        card +=`
        <div class="col-sm-6 p-2">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">` + r.name + `</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.
                    </p>
                    <a href="#" class="btn btn-primary">Temps - ` + r.prep_time +`</a>
                    <a href="#" class="btn btn-primary">Temps - ` + r.cook_time +`</a>
                    <a href="#" class="btn btn-primary">Personnes - ` + r.eater_nb +`</a>
                </div>
            </div>
        </div>`;
    }
    document.getElementById("recipe-card").innerHTML = card;
};

function addStep(){

    var iterator = 0;
    var step = " ";
    step += `<div class="mb-3">
    <label for="step_0" class="form-label">`+ iterator+1 +`</label>
    <textarea type="text" class="form-control" id="step_0"></textarea>
    <button type="button" class="btn btn-warning btn-primary mt-2">Ajouter</button>
</div>`
document.getElementById("recipe-card").innerHTML = card;
}

function checker(){

    p = document.getElementById("step_0").value;
    if(p != ''){
        console.log("check : " + p );
    }

    //const el = document.getElementById('step_0');
    //console.log(document.getElementById('step_0').innerHTML);
    //console.log(el.closest(div));

}
checker();
getApiRecette();
getApiRecetteAll();




