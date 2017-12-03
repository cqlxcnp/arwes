import React from 'react';
import testSetup from '../test-setup';
import Project from './Project';

const { mount } = testSetup(Project);

describe('Project', function () {

  it('Should render without crashing', function () {
    mount({
      Animation: ({ children }) => children({}),
      Frame: ({ children }) => <div>{children}</div>,
    });
  });

});
