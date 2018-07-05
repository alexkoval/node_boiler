import React from 'react';
import delayRender from 'react-delay-render';

const Loading = () => <div active size="massive" />;

export default delayRender({ delay: 300 })(Loading);