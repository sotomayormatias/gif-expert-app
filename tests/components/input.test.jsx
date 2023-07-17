import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "../../src/components";

describe('<input />', () => {
    const inputValue = 'boquita';

    test('Should change input value', () => {
        render(<Input onSearch={()=>{}} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: inputValue}});
        expect(input.value).toEqual(inputValue);
    });

    test('submit should call onSearch', () => {
        const handleSearch = jest.fn();
        render(<Input onSearch={handleSearch} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);

        expect(input.value).toEqual('');
        expect(handleSearch).toHaveBeenCalled();
        expect(handleSearch).toHaveBeenCalledWith(inputValue);
    });

    test('submit dont should call onSearch with empty input', () => {
        const handleSearch = jest.fn();
        render(<Input onSearch={handleSearch} />);
        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(handleSearch).toHaveBeenCalledTimes(0);
    });
});