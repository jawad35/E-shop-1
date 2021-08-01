import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loading from './spinner';

export default function CheckAuth(props) {
  const router = useRouter();
  const [showAuth, setShowAuth] = useState(true);
  useEffect(() => {
    if (props.user === null && props.userToken === null) router.push('/login');
    setShowAuth(false);
  }, []);
  return showAuth ? <Loading /> : props.children;
}
