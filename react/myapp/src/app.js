import View1 from './view1'
import View2 from './view2'
import Add from './add'
import View2a from './View2a'

const App = () => {
    return (
        <>
            <View1 />

            {View2()}

            {Add(2, 4)}

            {View2a({ a: 20, b: 30 })}
            <View2a b={20} a={30}/>
                


        </>
    )
}

export default App;