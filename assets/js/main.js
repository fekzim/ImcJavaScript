const form = document.querySelector('#formulario');

    // form.addEventListener('submit',(e)=>{
    //     e.preventDefault();
    //     console.log("Cancelado o evento");
    // })

    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        let dados = getValores();
        if(dados){
            console.log("Existem dados");
            const imc = calcularIMC(dados[0],dados[1]);
            const indice = setIndiceIMC(imc);
            const mensagem = `IMC Atual: ${imc}, (${indice})`;
            setResultado(mensagem,true);

        }else{setResultado('Valores invalidos')}
    });

    function getValores(){
        const resultado = [];
        const inputaltura = document.querySelector('#altura');
        let altura = Number(inputaltura.value);
        const inputPeso = document.querySelector('#peso');
        let peso = Number(inputPeso.value);

        if(!altura || !peso){
            return;
        }else{
            resultado.push(peso);
            resultado.push(altura);
            return resultado;
        }
    }

    function calcularIMC(peso,altura){
        console.log(peso,altura);
        const resposta = peso/altura;
        return resposta.toFixed(2);
    }

    function setIndiceIMC(imc){
        const indice = ['Abaixo do peso', 'Normal','Sobrepeso','Obesidade 1','Obesidade 2','Obesidade 3'];
        if(imc >= 39.9) return indice[5];
        if(imc >= 34.9) return indice[4];
        if(imc >= 29.9) return indice[3];
        if(imc >= 24.9) return indice[2];
        if(imc >= 18.5) return indice[1];
        if(imc < 18.5) return indice[0];
    }

    function setResultado(mensagem,valid){
        const resultado = document.querySelector('#resultado');
        
        const p = document.createElement('p');
        resultado.innerHTML = '';

        p.innerHTML = mensagem;

        
            p.classList.add('resultado');
        if(!valid){
            p.classList.add('bad');
        }
    
        resultado.appendChild(p);

    }
