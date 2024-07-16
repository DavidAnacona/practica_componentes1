export const SecondComponent = () => {

    const books = [
        "Harry Potter y la piedra filosofal",
        "Harry Potter y la cámara secreta",
        "Harry Potter y el prisionero de Azkaban",
        "Harry Potter y el cáliz de fuego",
        "Harry Potter y la orden del Fénix",
        "Harry Potter y el misterio del príncipe",
        "Harry Potter y las reliquias de la muerte"
    ];

  return (
    <div>
        <h2>Listado de libros</h2>
        <ul style={{textAlign: 'left'}}>
            {books.map((book, index) => {
                return <li key={index}>{book}</li>
            })}
        </ul>
    </div>
  )
}
