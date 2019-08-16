      async function getlist() {
        let template = document.getElementById("repos");

        const profileResponse = await fetch(
          `https://dadosabertos.camara.leg.br/api/v2/deputados/`
        );
        const profile = await profileResponse.json();

        console.log(profile.dadosn)

        for (let i = 0; i < profile.dados.length; i++) {
          template.innerHTML += `
          <div class="image">
            <div class="col-md-2" style="">
              <img  width="100%" src="${profile.dados[i].urlFoto}" alt="Card image cap">
            </div>
            
            <div class="col-md-10" style="">
                  <ul>
                    <li class="" style="list-style:none"><h5>Deputado: ${profile.dados[i].nome}</h5></li>
                    <li class="" style="list-style:none"><h5>Partido: ${profile.dados[i].siglaPartido} - ${profile.dados[i].siglaUf}</h5></li>
                    <li class="" style="list-style:none"><h5>Email: ${profile.dados[i].email}</h5></li>
                    <li>
                      <a href="${profile.dados[i].uri}" target="_blank" class="btn btn-info">Ver no site</a>
                    </li>
                  </ul>
            </div>
          </div>
          `;
        }
     }