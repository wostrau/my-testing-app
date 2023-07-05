import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

// creating a test you should follow 3A: arrange, act, assert.

describe('Greeting component', () => {
    test('renders Hello World! as a text', () => {
        // arrange
        render(<Greeting />);

        // act
        // ...

        // assert
        const helloWorldElement = screen.getByText(/hello world/i);
        expect(helloWorldElement).toBeInTheDocument(true);
    });
});

