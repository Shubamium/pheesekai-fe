
'use client'

import { createPortal } from 'react-dom'
import {useEffect, useRef} from 'react'
import './loading.scss'
export default function Loading() {
	const ref = useRef<Element | null>(null);
  useEffect(() => {
    ref.current = document.documentElement;
  }, []);
	return  ref.current ? createPortal( <div className="loading"><img src="/gif/loading.gif" alt="" /></div>, ref.current) : null;
}