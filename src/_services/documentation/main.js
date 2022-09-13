/* eslint-disable no-param-reassign */

/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  stories: ['../../**/*.stories.mdx', '../../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-a11y'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  },

  async viteFinal(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../../'),
      '@atoms': path.resolve(__dirname, '../../atoms'),
      '@molecules': path.resolve(__dirname, '../../molecules'),
      '@organisms': path.resolve(__dirname, '../../organisms'),
      '@tokens': path.resolve(__dirname, '../../tokens')
    }
    return config
  }
}
