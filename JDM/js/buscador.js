document.addEventListener("keyup", e=>{

  if (e.target.matches("#buscador")){

      if (e.key ==="Escape")e.target.value = ""

      document.querySelectorAll(".card").forEach(buscar =>{

          buscar.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?buscar.classList.remove("filtro")
            :buscar.classList.add("filtro")
      })

  }


})