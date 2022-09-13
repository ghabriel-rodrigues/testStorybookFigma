module.exports = {
  rules: {
    'testing-accessibility': {
      meta: {
        type: 'problem',
        messages: {
          match: 'Need to include at least one accessibility test'
        }
      },
      create(context) {
        return {
          Program: (node) => {
            const filename = context.getFilename()
            if (filename.includes('.test')) {
              const sourceCode = context.getSourceCode()

              const sourceCodeText = sourceCode.getText()

              const hasAccessibilityTest =
                sourceCodeText.includes('toHaveNoViolations')

              if (!hasAccessibilityTest)
                context.report({
                  node,
                  messageId: 'match',
                  data: {
                    filename
                  }
                })
            }
          }
        }
      }
    }
  }
}
