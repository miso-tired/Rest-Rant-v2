const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: Page not found D:</h1>
                <p>Oops, the page can't be found!</p>
            </main>
        </Def>
    )
}

module.exports = error404