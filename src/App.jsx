export default function App(){

    function toggleTheme(){
        document.documentElement.classList.toggle('dark-mode');
    }

    return (
        <>
            <h1>Where in the world?</h1>
            <h2>Belgium</h2>
            <h3 className="body-text"><b>Capital:</b> Brussels</h3>
            <button onClick={toggleTheme}>Change Theme</button>
        </>
    );
}