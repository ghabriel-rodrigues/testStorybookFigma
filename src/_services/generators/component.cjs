module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application controller logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Insert component name'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../../atoms/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/component/index.hbs'
      },
      {
        type: 'add',
        path: '../../atoms/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/component/stories.hbs'
      },
      {
        type: 'add',
        path: '../../atoms/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/component/test.hbs'
      }
    ]
  })
}
