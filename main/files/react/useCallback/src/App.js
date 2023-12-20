import React, { Component } from 'react';
import Element from './Element';

class App extends Component {
    state = {
        elements: [
            {
                id: 11111111111111111111111111111111111111111111,
                title: 'First',
            },
            {
                id: 2,
                title: 'Second',
            },
        ],
    };

    handleDeleteElement = id => {
        this.setState(prevState => ({
            elements: prevState.elements.filter(el => el.id != id)
        }));
    };

    render() {
        const { elements } = this.state;

        return (
            <>
                <div>context</div>
                <ul>
                    {elements.map(el => (
                        <li
                            key={el.id}
                        >
                            <Element deleteComponent={() => this.handleDeleteElement(el.id)} />
                        </li>
                    ))}
                </ul>
            </>
        )
    }
}

export default App
