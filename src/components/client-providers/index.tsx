'use client';

import React from 'react';
import ConfigProvider from '@/components/config-provider';
import { ParameterServiceProvider } from '@/components/parameter-service-provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { buildConfig, buildContainer } from '@/container';

const queryClient = new QueryClient();

const config = buildConfig();
const container = buildContainer(config);

function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider config={config}>
        <ParameterServiceProvider service={container.parameterService}>{children}</ParameterServiceProvider>
      </ConfigProvider>
    </QueryClientProvider>
  );
}

type ClientProvidersProps = {
  children: React.ReactNode;
};

export default ClientProviders;
