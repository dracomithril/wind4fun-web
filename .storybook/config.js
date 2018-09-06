import { configure } from '@storybook/react';

function requireAll(requireContext) {
  requireContext.keys().forEach(file => {
    global.currentStorybookFile = file;
    requireContext(file);
  });
}

function loadStories() {
  requireAll(require.context('../src/stories', true, /\.story\.jsx?$/));
}

configure(loadStories, module);
