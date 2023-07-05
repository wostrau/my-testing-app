import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';
import userEvent from '@testing-library/user-event';

// creating a test you should follow 3A: arrange, act, assert.

describe('Greeting component', () => {
    test('renders "hello world" as a text', () => {
        // arrange
        render(<Greeting />);

        // act
        // ...

        // assert
        const outputElement = screen.getByText(/hello world/i);

        expect(outputElement).toBeInTheDocument(true);
    });

    test('renders "good to see you" when the button was NOT clicked', () => {
        render(<Greeting />);

        const outputElement = screen.getByText(/good to see you/i);

        expect(outputElement).toBeInTheDocument(true);
    });

    test('renders "changed" when the button WAS clicked', () => {
        render(<Greeting />);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const outputElement = screen.getByText(/changed/i);

        expect(outputElement).toBeInTheDocument(true);
    });

    test('does NOT render "good to see you" when button WAS clicked', () => {
        render(<Greeting />);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const outputElement = screen.queryByText('good to see you', { exact: false });
        expect(outputElement).toBeNull();
    });
});

