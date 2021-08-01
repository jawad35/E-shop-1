import React from 'react';
import { CircularProgress } from '@material-ui/core';

export default function Loading() {
  return (
    <div style={{ position: 'absolute', top: '50%', left: '47%' }}>
      <CircularProgress size="large" />
    </div>
  );
}
