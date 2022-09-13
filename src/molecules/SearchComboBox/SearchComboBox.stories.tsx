import { ComponentStory, ComponentMeta } from '@storybook/react'
import { actions } from '@storybook/addon-actions'
import { SearchComboBox, Item } from '@/molecules/SearchComboBox'
import { items } from './tests/helpers/data'

export default {
  title: 'molecules/SearchComboBox',
  component: SearchComboBox
} as ComponentMeta<typeof SearchComboBox>

const Template: ComponentStory<typeof SearchComboBox> = (props) => {
  return (
    <>
      <SearchComboBox {...props}>
        {(item) => <Item>{item.value}</Item>}
      </SearchComboBox>
    </>
  )
}

export const Default = Template.bind({})

Default.args = {
  items: items,
  allowsCustomValue: true,
  label: 'Job label',
  inputProps: {
    'aria-label': 'type some job name'
  },
  buttonProps: {
    'aria-label': 'search job'
  },
  ...actions({
    onSubmit: 'submitted value',
    onSelectionChange: 'selected key',
    onInputChange: 'changed value'
  })
}
