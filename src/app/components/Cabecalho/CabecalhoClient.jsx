import Cabecalho from './Cabecalho.jsx';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useClient } from '@next/bridge';

function CabecalhoClient() {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState(router.pathname);

  useEffect(() => {
    const handleRouteChange = (newPath) => {
      setCurrentPath(newPath);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return <Cabecalho currentPath={currentPath} />;
}

export default useClient(CabecalhoClient); 
