import React from 'react';

import { styled } from '@storybook/theming';
import { Link } from '@storybook/components';

const Footer = styled.div(({ theme }) => ({
  display: 'flex',
  paddingTop: 20,
  marginTop: 20,
  borderTop: `1px solid ${theme.mainBorderColor}`,
  fontSize: `${theme.typography.size.s2}px`,
  fontWeight: `${theme.typography.weight.bold}`,

  '& > * + *': {
    marginLeft: 20,
  },
}));
const SettingsFooter = props => (
  <Footer {...props}>
    <Link secondary href="https://storybook.js.org">
      Docs
    </Link>
    <Link secondary href="https://github.com/storybooks/storybook">
      GitHub
    </Link>
    <Link secondary href="https://storybook.js.org/support">
      Support
    </Link>
  </Footer>
);

export default SettingsFooter;