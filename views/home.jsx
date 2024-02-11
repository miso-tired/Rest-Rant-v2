const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>Home</h1>
                    <img src="images/Thai-Food.jpg" alt="Thai Food" />
                    <div>
                        Photo by <a href="https://unsplash.com/@jomemui?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jerome Jome</a> on <a href="https://unsplash.com/s/photos/free">Unsplash</a>
                    </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home