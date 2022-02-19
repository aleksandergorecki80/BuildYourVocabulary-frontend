import React from 'react';
import WordInput from 'components/WordInput';

import { mount } from 'enzyme'; // Full Rendering API (mount(...))

let wrapped;
beforeEach(() => {
    wrapped = mount(<WordInput />);
});

afterEach(() => {
    wrapped.unmount();
});

it('has an input field and a button', () => {
    expect(wrapped.find('input[type="text"]')).toHaveLength(1);
    expect(wrapped.find('button')).toHaveLength(2);
});

describe('Input form field:', () => {

    beforeEach(() => {
        wrapped
          .find('input[type="text"]')
          .simulate('change', { target: { value: 'look for it' } });
        wrapped.update();
    })

  it('sets the state with entered value', () => {
    expect(wrapped.find('input[type="text"]').prop('value')).toEqual(
      'look for it'
    );
  });

  it('clears the input field when form is submited', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('input[type="text"]').prop('value')).toEqual('');
  });

});
