const React = require('react')

function Default(html) {
    return (
      <html>
      <head>
        <title>{html.title || 'Default'}</title>
        <link rel="stylesheet" href="/main.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
      </head>
      <body>
        <div className="wrapper">
          <header>
            <h1><a href="/breads">BreadCRUD</a></h1>
          </header>
          <div className="container">
            {html.children}
          </div>
        </div>
      </body>

      </html>
    )
  }
  

module.exports = Default
