function tab(){
    let divheader = document.querySelector('.header')
    let divtheader = document.querySelector('.theader')
    let main = document.querySelector('.main')
    let body = document.querySelector('body')
    let table = document.querySelector('.table')
    let ttable = document.querySelector('.tmain')

    main.style.display = 'none'
    divheader.style.display = 'flex'
    divtheader.style.display = 'flex'
    body.style.display = 'block'
    table.style.display = 'flex'
    ttable.style.display = 'block'
    
}

function vol(){
    let divheader = document.querySelector('.header')
    let divtheader = document.querySelector('.theader')
    let main = document.querySelector('.main')
    let body = document.querySelector('body')
    let table = document.querySelector('.table')
    let ttable = document.querySelector('.tmain')

    main.style.display = 'flex'
    divheader.style.display = 'none'
    divtheader.style.display = 'none'
    body.style.display = 'flex'
    table.style.display = 'none'
    ttable.style.display = 'none'
}


let btn = document.querySelector("#sub");


btn.addEventListener("click", function (event) {
    debugger
    event.preventDefault(); // Vai previnir a ação padrão da página com o tratamento dos dados

    let name = document.querySelector("#name")
    let iname = name.value
    let lastname = document.querySelector("#last-name")
    let ilast = lastname.value
    let age = document.querySelector("#age")
    let iage = age.value
    let email = document.querySelector("#e-mail")
    let iemail = email.value
    let cpf = document.querySelector("#cpf")
    let icpf = cpf.value
    let check = document.querySelector('#check')

    if (iname == "" || ilast == "" || iage == "" || iemail == "" || icpf == "" || !check.checked) {
        alert('Você Precisa preencher todos os Campos')
    } else {

        console.log(iname)
        console.log(ilast)
        console.log(iage)
        console.log(iemail)
        console.log(icpf)

        let linha = document.createElement('tr') // Cria uma nova linha na tabela

        let celnome = document.createElement('td') // Cria um novo dado na linha
        let lastname_ = document.createElement('td')
        let date_ = document.createElement('td')
        let eemail = document.createElement('td')
        let cpf_ = document.createElement('td')

        celnome.textContent = iname
        lastname_.textContent = ilast
        date_.textContent = iage
        eemail.textContent = iemail
        cpf_.textContent = icpf

        let table = document.querySelector('.tmain').querySelector('tbody') // Armazena o corpo da tabela

        linha.appendChild(celnome)
        linha.appendChild(lastname_)
        linha.appendChild(date_)
        linha.appendChild(eemail)
        linha.appendChild(cpf_)

        table.appendChild(linha)
        
        name.value = ""
        lastname.value = ""
        age.value = ""
        email.value = ""
        cpf.value = ""
        check.checked = ""
    }
})


