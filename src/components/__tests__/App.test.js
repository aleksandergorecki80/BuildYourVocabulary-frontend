import React from "react";

import { shallow } from 'enzyme'
import App from 'components/App';
import Definition from "components/DefinitionList";
import WordInput from "components/WordInput";
// import Solution from "components/Solution";


describe('App tests:', () => {
    let app;
    beforeEach(() => {
        app = shallow(<App />);
    });

    it('shows a Definition component', () => {
        expect(app.find(Definition)).toHaveLength(1);
    });
    
    it('shows a WordInput component', () => {
        expect(app.find(WordInput)).toHaveLength(1);
    });
    
    // it('shows a Solution component', () => {
    //     expect(app.find(Solution)).toHaveLength(1);
    // });
});
