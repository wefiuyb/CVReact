import { CV } from "./CV";
import { Section } from "./Section";
import TicTacToe from "./tictactoe/TicTacToe";

function App() {
    return (
        <>
            <CV />
            
            <Section title="Крестики-Нолики" defaultOpened={true}>
                <TicTacToe />
            </Section>
        </>
    );
}

export default App;
