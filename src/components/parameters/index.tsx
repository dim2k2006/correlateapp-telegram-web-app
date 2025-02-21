'use client';

import React from 'react';
import { useConfig } from '@/components/config-provider';
import { useGetParametersByUser } from '@/components/parameter-service-provider';

function Parameter() {
  const { userId } = useConfig();

  const parametersFetchingState = useGetParametersByUser(userId);

  console.log('parametersFetchingState', parametersFetchingState.data);

  return <div>Here goes parameters data</div>;
}

export default Parameter;
