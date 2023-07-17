import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/gifExpertApp"
import React from "react";

describe('Test on <GifExpertApp />', () => {
    test('Should match snapshot', () => {
        const {container} = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
    });

    test('Should add categories on new search', () => {
        const inputValue = 'boquita';
        const inputValue2 = 'boca juniors';
        const setState = jest.fn();
        jest
          .spyOn(React, 'useState')
          .mockImplementationOnce(initState => [initState, setState]);

        render(<GifExpertApp />);
        
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.input(input, {target: {value: inputValue2}});

        expect(setState).toHaveBeenCalledTimes(2);
    });
})