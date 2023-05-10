const React = require('react')
const Default = require('./layouts/default')

function Show ({bread}) {
    // Confirm we are getting our bread data in the terminal.
    // console.log(bread.name)
      return (
        <Default>
            <h3>{bread.name}</h3>
            <p>
                and it
                {
                bread.hasGluten
                ? <span> does </span>
                : <span> does NOT </span>
                }
                have gluten.
            </p>
            <img src={bread.image} alt={bread.name} />


            <p>{bread.getBakedBy()}</p>

            <ui><a href="/breads"> <button> Go home</button></a></ui>

            <ui>
              <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
                <input type='submit' value="Delete"/>
              </form>
              <a href={`/breads/${bread.id}/Edit`}><button>Edit</button></a>
            </ui>
        </Default>

      )
  }
  

module.exports = Show
