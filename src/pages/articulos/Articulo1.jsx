import './styles.css'


const Articulo1 = () => {
  return (
    <>
    <div className='article-bg'>
      <h1 className='title-article'>CHECO PEREZ SE LLEVA LA VICTORIA EN SINGAPUR</h1>
      <h5 className='text-muted writer-art'> <em>08 de Octubre del 2022 </em></h5>
      <div>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><button type="button" className="btn btn-danger mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
            Instagram
          </button></li>
          <li><button type="button" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
            </svg>
            FacebooK
          </button></li>
          <li><button type="button" className="btn bg-light btn-outline-primary mx-2">
        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
        </svg>
          Twitter
      </button></li>
          <li> <button type="button" className="btn btn-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-share" viewBox="0 0 16 16">
          <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
        </svg>
      </button></li>
        </ul>
        <img
            className="d-block w-70 m-5"
            src="https://cnnespanol.cnn.com/wp-content/uploads/2022/10/checo-perez-gp-singapur-e1664725077162.jpg?quality=100&strip=info"
            alt="Sergio Perez Wins"
            height={700}
          />  
          <p className='m-5'>Sergio Pérez, logró conquistar su primera victoria en las calles de Singapur, por delante de Leclerc y
Sainz completando el podio. Pérez retuvo su victoria a pesar de recibir una penalización de 5s, pero al
final logro una distancia de 7.5s del segundo clasificado, manteniendo así su victoria. El GP de Singapur
se retrasaría para comenzar a las 21:05 hora local. Max Verstappen se conformó en P8 en la parrilla
después de una falla en la Qualy; Leclerc consiguió la pole por delante del mexicano. Si bien la lluvia se
detuvo durante algunos lapsos, pero las condiciones aún eran desafiantes; Las luces se apagaron, Pérez
tuvo el mejor comienzo, superando a Charles Leclerc, mientras que Hamilton se abrió de par en par
evitando a Carlos Sainz y cayendo a P4 en la curva 1. Verstappen perdió cinco lugares para caer en P12
en el comienzo, pero recuperó tres en la vuelta 9 cuando se desplegó el primer SC por la colisión entre
Latifi y Zhou.
Otra parada de Alonso provocó un VSC en la vuelta 20. Siendo Russell el primero en cambiar
neumáticos intermedios a medios. Las condiciones seguían siendo demasiado resbaladizas para los
slicks, advirtiendo así a los pilotos que mantuvieran sus neumáticos intermedios en buenas condiciones.
Albon entró en pits en busca de slicks y una nariz nueva después de su contacto con la pared, pero
pronto recibió la señal de detenerse. El VSC resultante pronto se retractó, por Ocon que se detuvo con
un motor humeante. Otro VSC en la vuelta 28 y es cuando el equipo de Ferrari salió con un nuevo
conjunto de intermedios para Sainz. El ritmo mejorado de Russell provocó que los demás comenzaran a
cambiar neumáticos en la vuelta 35, pero en la siguiente vuelta, Yuki Tsunoda se dirigió directamente a
las barreras para sacar el segundo SC, antes del cual la mayoría de los pilotos se habían detenido a
cambiar sus neumáticos; crucialmente, los pilotos de McLaren no lo habían hecho.
El Safety Car se retiró al final de la vuelta 39, con el contador de vueltas cambiado a un cronómetro de
cuenta regresiva; quedaban solo 35 minutos en el reloj de dos horas, Pérez continuó liderando. Catorce
autos reiniciaron y Verstappen intentó adelantar a Norris, pero el holandés sufrió un gran bloqueo a
máxima velocidad en la curva 7 cayendo al final detrás de Russell. Verstappen no duró mucho, ya que
Russell redujo la velocidad con un neumático trasero derecho pinchado, después de haber rozado las
ruedas con Schumacher en un intento de pasarlo por P12. Pronto quedó claro que Schumacher también
tuvo un pinchazo y él también entró en boxes en la vuelta 42. Con la marca de las dos horas
acercándose, el cronómetro terminaría esta carrera, Leclerc y Pérez empujaron los límites a partir de
entonces en una brillante persecución por el liderato. Sergio Pérez tuvo 26 minutos para mantener a raya
a un Leclerc de carga rápida, cuando se habilitó el DRS.
Lo que siguió fue una impresionante persecución por la victoria, Pérez infalible en la defensa mientras
mantenía a raya al piloto monegasco por más de 7s en la bandera a cuadros. Pérez recibiría una
penalización después de la carrera, pero el mexicano retuvo su victoria. Leclerc ocupó el segundo lugar
con su compañero de equipo completando el podio para Ferrari después de haber superado a Hamilton
en la salida, mientras que Norris y Ricciardo se beneficiaron de sus paradas tardías en SC y terminaron
P4 y P5 respectivamente. Stroll y Vettel capitalizaron los errores de Hamilton y Verstappen, para
terminar sexto y octavo respectivamente, en un gran resultado. Detrás de Hamilton, Gasly completó el
top 10 al final hubo seis retiros en la carrera. El circuito de Suzuka es la siguiente ronda del calendario,
con Verstappen aún sigue liderando el campeonato con 341 puntos, el campeonato se vuelve cada vez
más interesante..</p>
<p className='writer-art'><em>Regina Palacios</em></p>
      </div>
      </div>
    </>
  );
};


export default Articulo1;

