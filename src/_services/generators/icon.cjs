/* eslint-disable func-names */
module.exports = function (plop) {
  plop.setGenerator('icon', {
    description: 'application controller logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Insert icon name'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/atoms/Icon/icons/{{pascalCase name}}.tsx',
        templateFile: 'templates/icon/index.hbs'
      }
    ]
  })
}
