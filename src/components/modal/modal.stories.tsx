import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  CoreModal as Modal,
  ModalCardHead,
  ModalCardBody,
  CardModal as ModalCard,
  ModalCardFoot,
} from './modal'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Modal',
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Modal>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal>
    <div>test</div>
  </Modal>
)

export const ModelExample = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ModelExample.args = {}
let modalShown = false
const setModalShown = (val: boolean) => {
  modalShown = val
}
const TriggerTemplate: ComponentStory<typeof Modal> = (args) => (
  <Modal triggerFn={setModalShown} isActive={modalShown}>
    <ModalCardHead title="ModalTitle"></ModalCardHead>
    <ModalCardBody>Hey Hey</ModalCardBody>
    <ModalCardFoot>
      <button
        className="button is-success"
        onClick={(e) => {
          e.preventDefault()
          setModalShown(false)
        }}
      >
        Save changes
      </button>
    </ModalCardFoot>
  </Modal>
)
export const TriggerTemplateExample = TriggerTemplate.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TriggerTemplateExample.args = {}
