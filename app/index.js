const hero = document.querySelector("#hero");

const types = async (opt, opt2) => {
    document.getElementById("section").innerHTML = ''
    const listaFactions = await fetch(`http://localhost:3000/${opt}/${opt2}`)
    const respostaFactions = await listaFactions.json()
    respostaFactions.map((itemFactions) => {
        if (itemFactions.img) {
            const conteudoFactions = `
								<div class="card">
									<img class="card-img" src='${itemFactions.img}'>
								</div>
							`
            document.getElementById("section").innerHTML += conteudoFactions
        } else{
			const conteudoFactions = `
								<div class="card">
									<div class ="card-img card-img-fake">
									<span class ="name">${itemFactions.name}</span>
									</div>
								</div>
							`
            document.getElementById("section").innerHTML += conteudoFactions
		}
    })
}

