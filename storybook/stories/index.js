import React from 'react';
import {storiesOf} from '@storybook/react-native';
import TextStory from './TextStory';
import ViewStory from './ViewStory';

storiesOf('DaganganUikit', module)
  .add('Text', () => <TextStory />)
  .add('View', () => <ViewStory />);
