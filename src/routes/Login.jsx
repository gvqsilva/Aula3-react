import { useRef } from "react"
import Cliente from '../components/Cliente'

const Login = ()=>{

    // Hook - useRef retortna uma referencia a um elemento
    // ou componente sem ser renderizado

    const usuario = useRef();
    const senha = useRef();


    const getUsuario = sessionStorage.getItem('usuario')
    const getSenha = sessionStorage.getItem('senha')

    //Criando a função handleLogin
    const handleLogin=()=>{

        if(usuario.current.value =="Admin" && senha.current.value =="123456"){
            alert('Seja bem vindo ao Site')

            // Criando um token de autenticação

            let token =
                Math.random().toString(16).substring(2)+
                Math.random().toString(16).substring(2)+

            sessionStorage.setItem("usuario","Admin")
            sessionStorage.setItem("senha",token)

        }
        else{
            alert("Usuario/Senha invalido(s)")
        }
    }

    return(
        <section>
            {/* usando condição ternaria p/ chamar o componente cliente */}

            {getUsuario && getSenha ? (

                <Cliente/>
            
            ):

            <form onSubmit={handleLogin}>
                <p>
                    Usuário:
                    <input type="text" placeholder="Digite seu usuário" ref={usuario}/>
                </p>
                <p>
                    Senha:
                    <input type="password" placeholder="Digite sua senha" ref={senha}/>
                </p>
                <button type="submit">Entrar</button>
            </form>
                }
        </section>
    )
}
export default Login