import PropTypes from "prop-types"

export const MyComponent = ( { name }) => {

    const student = {
        name: "Carolina",
        lastName: "Marino",
        mobile: "300000",
        linkedinProfile: "https://www.linkedin.com/carolina"
    };

  return (
    <div>
        <hr />
        <h4>Este es mi primer componente</h4>
        <p>Temas de React:</p>
        <ul>
            <li>Componentes</li>
            <li>Eventos</li>
            <li>Estados</li>
            <li>Comunicación</li>
        </ul>
        <hr />
        <p>Estudiante: <strong>{student.name} {student.lastName}</strong></p>
        <hr />
        {/*<p>Estudiante objeto completo: <strong>{JSON.stringify(student)}</strong></p> */}
        <p>Elaborado por <strong>{name}</strong></p>
    </div>
  )
}

MyComponent.propTypes = {
    name: PropTypes.string
}