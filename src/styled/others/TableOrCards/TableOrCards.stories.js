import React from 'react';
import TableOrCards from './TableOrCards';

export default {
  title: 'Exported via npm/Styled/Others/TableOrCards',
  component: TableOrCards,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: '800px', width: '100%', maxWidth: '1200px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    viewAs: {
      description: 'View as Cards or Table',
      control: 'text',
    },
    setViewAs: {
      description: 'SetState function for viewAs state',
      control: 'function',
    },
  },
};



export const CardsSelected = {
  args: {
    viewAs:'cards',
    setViewAs:function(){}
  },
};
export const TableSelected = {
  args: {
    viewAs:'table'
  },
};

