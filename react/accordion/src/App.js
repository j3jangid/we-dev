import Accordion from "./Accordion"
import Nav from "./nav"
import Data from "./data"
import Aside from "./Aside"

const App = () => {
    return (
        <>
            <Nav />
            <div className="mainBody">
                <div className="mainSec">
                    {Data.map((item) => (<Accordion title={item.title} topics={item.topics} />))}
                </div>
                <Aside />
            </div>
        </>
    )
}

export default App
