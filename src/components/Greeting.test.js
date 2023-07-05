import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders Hello World! as a text', () => {
    render(<Greeting />);

    const helloWorldElement = screen.getByText(/hello world/i);
    expect(helloWorldElement).toBeInTheDocument(true);
});