function App() {
    const d = new Date()
    const year = d.getFullYear()
    const birthYear = year - 1995
    console.log(birthYear)

    const st1 = { color: 'gold', backgroundColor: 'silver'}
    const st2 = { color: 'blue', backgroundColor: 'coral'}
    return(
        <div>
            <h1 style={st1}>Name : Samach Chao-ophart</h1>
            <p style={st2}>age : {birthYear}</p>

        </div>
    )
}


ReactDOM.createRoot(document.querySelector('#root'))
.render(<App />)